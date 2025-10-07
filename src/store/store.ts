import { createStore, produce } from 'solid-js/store';
import convertWorker from '../workers/convert.worker.ts?worker';
import { showNotification } from '../components/NotificationArea/notificationStore';
import { i18nService } from '../i18n/i18nService';

export const getFormatOptions = () => [
    { value: 'AUTO', label: i18nService.t('store_formatOptionAuto') },
    { value: 'JPG', label: i18nService.t('store_formatOptionJpg') },
    { value: 'lossy-PNG', label: i18nService.t('store_formatOptionPngLossy') },
    { value: 'lossless-PNG', label: i18nService.t('store_formatOptionPngLossless') },
    { value: 'lossy-WEBP', label: i18nService.t('store_formatOptionWebpLossy') },
    { value: 'lossless-WEBP', label: i18nService.t('store_formatOptionWebpLossless') },
    { value: 'lossy-AVIF', label: i18nService.t('store_formatOptionAvifLossy') },
    { value: 'lossless-AVIF', label: i18nService.t('store_formatOptionAvifLossless') },
] as const;
const downloadFileTypeLookup: Record<NonNullable<ImageObject["targetType"]>, NonNullable<ImageObject["downloadFileType"]>> = {
    'JPG': 'JPEG',
    'lossy-PNG': 'PNG',
    'lossless-PNG': 'PNG',
    'lossy-WEBP': 'WEBP',
    'lossless-WEBP': 'WEBP',
    'lossy-AVIF': 'AVIF',
    'lossless-AVIF': 'AVIF',
};
// --- 1. Type Definitions ---
export type Format = ReturnType<typeof getFormatOptions>[number]['value'];

export interface ImageObject {
    id: string;
    taskId: number;
    original: File;
    fileBaseName: string;
    original_blob_url: string;
    target_blob_url: string | null;
    originalType: 'PNG' | 'WEBP' | 'JPG' | 'AVIF' | 'HEIC';
    targetType?: 'JPG' | 'lossy-PNG' | 'lossless-PNG' | 'lossy-WEBP' | 'lossless-WEBP' | 'lossy-AVIF' | 'lossless-AVIF';
    originalWidth: number;
    originalHeight: number;
    originalDimensions: string;
    targetWidth: number;
    targetHeight: number;
    targetDimensions: string;
    convertState: 'pending' | 'converting' | 'completed' | 'failed';
    originalFileSize: number;
    targetFileSize: number;
    localQuality: number;
    localSize: number;
    localFormat: Format;
    reduction: number;
    downloadFileType?: 'PNG' | 'WEBP' | 'JPEG' | 'AVIF';
    isExpanded: boolean;
}

interface AppState {
    quality: number;
    size: number;
    format: Format;
    imgList: ImageObject[];
}

// --- 2. State Creation ---
const [state, setState] = createStore<AppState>({
    quality: 75,
    size: 100,
    format: 'AUTO',
    imgList: [],
});

// --- 3. Helper Functions ---
const generateImageID = (() => {
    let id = 0;
    return () => String(id++);
})();

export function formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
}

export function formatImageType(targetType: NonNullable<ImageObject["targetType"]>): string | undefined {
    return (getFormatOptions().find(item => item.value === targetType))?.label;
}

async function getImageDimensions(file: File, type: ImageObject['originalType']): Promise<{ width: number; height: number }> {
    if (type === 'HEIC') {
        const libheif = await import('libheif-js/wasm-bundle');
        const arrayBuffer = await file.arrayBuffer();
        const decoder = new libheif.HeifDecoder();
        const images = decoder.decode(arrayBuffer);
        if (!images || images.length === 0) {
            throw new Error('HEIC file contains no images.');
        }
        const image = images[0];
        const width = image.get_width();
        const height = image.get_height();
        return { width, height };
    } else {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                resolve({ width: img.width, height: img.height });
                URL.revokeObjectURL(img.src);
            };
            img.onerror = (err) => {
                reject(err);
                URL.revokeObjectURL(img.src);
            };
            img.src = URL.createObjectURL(file);
        });
    }
}

async function getOriginalType(file: File): Promise<ImageObject['originalType'] | 'UNKNOWN'> {
    const arrayBuffer = await file.arrayBuffer();
    const view = new Uint8Array(arrayBuffer);
    if (view.length > 8 && view[0] === 0x89 && view[1] === 0x50 && view[2] === 0x4E && view[3] === 0x47) {
        return 'PNG';
    }
    if (view.length > 3 && view[0] === 0xFF && view[1] === 0xD8 && view[2] === 0xFF) {
        return 'JPG';
    }
    if (view.length > 12 && view[0] === 0x52 && view[1] === 0x49 && view[2] === 0x46 && view[3] === 0x46 &&
        view[8] === 0x57 && view[9] === 0x45 && view[10] === 0x42 && view[11] === 0x50) {
        return 'WEBP';
    }
    // Check for AVIF
    if (view.length > 12 &&
        view[4] === 0x66 && view[5] === 0x74 && view[6] === 0x79 && view[7] === 0x70 && // 'ftyp'
        view[8] === 0x61 && view[9] === 0x76 && view[10] === 0x69 && view[11] === 0x66   // 'avif'
    ) {
        return 'AVIF';
    }
    // Check for HEIC/HEIF
    const ftyp = String.fromCharCode.apply(null, Array.from(view.subarray(4, 8)));
    if (ftyp === 'ftyp') {
        const majorBrand = String.fromCharCode.apply(null, Array.from(view.subarray(8, 12)));
        const heicBrands = ['heic', 'heix', 'hevc', 'hevx', 'mif1', 'msf1'];
        if (heicBrands.includes(majorBrand)) {
            return 'HEIC';
        }
    }
    return 'UNKNOWN';
}

// --- 4. Core Logic / Actions ---

async function convertImage(id: string) {
    const imgData = state.imgList.find(item => item.id === id);
    if (!imgData) return;

    const currentTaskId = imgData.taskId + 1;
    setState('imgList', (img) => img.id === id, 'taskId', currentTaskId);

    try {
        const targetWidth = Math.round(imgData.originalWidth * imgData.localSize / 100);
        const targetHeight = Math.round(imgData.originalHeight * imgData.localSize / 100);

        let determinedTargetType: NonNullable<ImageObject["targetType"]>;
        if (imgData.localFormat === 'AUTO') {
            if (imgData.originalType === 'PNG') {
                determinedTargetType = 'lossy-PNG'
            } else if (imgData.originalType === 'WEBP') {
                determinedTargetType = 'lossy-WEBP'
            } else if (imgData.originalType === 'AVIF') {
                determinedTargetType = 'lossy-AVIF'
            } else if (imgData.originalType === 'HEIC') {
                determinedTargetType = 'JPG'
            } else {
                determinedTargetType = imgData.originalType
            }
        } else {
            determinedTargetType = imgData.localFormat;
        }
        const determinedDownloadType = downloadFileTypeLookup[determinedTargetType];

        if (state.imgList.find(item => item.id === id && item.taskId === currentTaskId)) {
            setState('imgList', (img) => img.id === id, produce(img => {
                img.targetWidth = targetWidth;
                img.targetHeight = targetHeight;
                img.targetDimensions = `${targetWidth}x${targetHeight}`;
                img.targetType = determinedTargetType;
                img.downloadFileType = determinedDownloadType

                img.convertState = 'converting';
            }));
        } else {
            return;
        }

        const arrayBuffer = await imgData.original.arrayBuffer();

        const imageProcessData = await new Promise((resolve, reject) => {
            const worker = new convertWorker();
            worker.onmessage = (event) => {
                const { success, imageProcessData, error } = event.data;
                if (success) {
                    resolve(imageProcessData);
                } else {
                    reject(error);
                }
                worker.terminate();
            };
            worker.onerror = (err) => {
                reject(err);
                worker.terminate();
            }
            worker.postMessage({
                arrayBuffer,
                imgDataToWorker: {
                    id: imgData.id,
                    currentTaskId,
                    originalType: imgData.originalType,
                    localSize: imgData.localSize,
                    targetWidth: targetWidth,
                    targetHeight: targetHeight,
                    localQuality: imgData.localQuality,
                    targetType: determinedTargetType,
                },
            }, [arrayBuffer]);
        });

        if (!state.imgList.find(item => item.id === id && item.taskId === currentTaskId)) {
            return; // Stale task
        }

        const blob = new Blob([imageProcessData as ArrayBuffer], { type: `image/${determinedDownloadType.toLowerCase()}` });

        if (imgData.target_blob_url) {
            URL.revokeObjectURL(imgData.target_blob_url)
        }

        setState('imgList', (img) => img.id === id, produce(img => {
            img.target_blob_url = URL.createObjectURL(blob);
            img.targetFileSize = blob.size;
            img.convertState = 'completed';
        }));

    } catch (error) {
        console.error("[convertImage error]", error);
        if (state.imgList.find(item => item.id === id && item.taskId === currentTaskId)) {
            setState('imgList', (img) => img.id === id, 'convertState', 'failed');
            showNotification(i18nService.t('store_conversionFailedNotification', { fileName: imgData.original.name }), 'failed');
        }
    }
}

export async function handleFiles(files: FileList) {

    if (files.length === 0) return;

    const filesArray = Array.from(files);
    filesArray.sort((a, b) => a.name.localeCompare(b.name));

    const newImagesPromises = filesArray.map(async (file) => {
        try {

            const originalType = await getOriginalType(file);
            if (originalType === "UNKNOWN") {
                showNotification(i18nService.t('store_unsupportedFileTypeNotification', { fileName: file.name }), 'failed');
                return null
            }

            const dimensions = await getImageDimensions(file, originalType);

            const lastDotIndex = file.name.lastIndexOf('.');
            const fileBaseName = lastDotIndex === -1 ? file.name : file.name.substring(0, lastDotIndex);
            const newImage: ImageObject = {
                id: generateImageID(),
                taskId: 0,
                original: file,
                fileBaseName,
                original_blob_url: URL.createObjectURL(file),
                target_blob_url: null,
                originalType,
                originalWidth: dimensions.width,
                originalHeight: dimensions.height,
                originalDimensions: `${dimensions.width}x${dimensions.height}`,
                targetWidth: 0,
                targetHeight: 0,
                targetDimensions: '0x0',
                convertState: 'pending',
                originalFileSize: file.size,
                targetFileSize: 0,
                localQuality: state.quality,
                localSize: state.size,
                localFormat: state.format,
                reduction: 0,
                isExpanded: false,
            };
            return newImage;
        } catch (error) {
            console.error(`[Failed to process file]: ${file.name}`, error);
            showNotification(i18nService.t('store_fileReadErrorNotification', { fileName: file.name }), 'failed');
            return null;
        }
    });

    const newImages = (await Promise.all(newImagesPromises)).filter(Boolean) as ImageObject[];

    if (newImages.length > 0) {
        setState('imgList', (prev) => [...prev, ...newImages]);
        showNotification(i18nService.t('store_convertingImagesNotification', { number: newImages.length }), 'success');
        newImages.forEach(img => convertImage(img.id));
    }
}

export function reconvertAll() {
    // 1. Use produce for an atomic update
    setState(produce(s => {
        // In the produce callback, s is a "draft" that can be modified directly
        s.imgList.forEach(img => {
            img.localQuality = s.quality;
            img.localSize = s.size;
            img.localFormat = s.format;
        });
    }));

    // 2. After the state is updated, iterate through the list to trigger conversions
    state.imgList.forEach(img => {
        convertImage(img.id);
    });
}

export function restoreAll() {
    setState({
        quality: 75,
        size: 100,
        format: 'AUTO'
    });
}

export function deleteAll() {
    // Revoke all blob URLs before deleting
    state.imgList.forEach(img => {
        URL.revokeObjectURL(img.original_blob_url);
        if (img.target_blob_url) {
            URL.revokeObjectURL(img.target_blob_url);
        }
    });
    setState('imgList', []);
}

export function deleteImage(id: string, fileName: string) {
    const imgIndex = state.imgList.findIndex(item => item.id === id);
    if (imgIndex > -1) {
        const img = state.imgList[imgIndex];
        URL.revokeObjectURL(img.original_blob_url);
        if (img.target_blob_url) {
            URL.revokeObjectURL(img.target_blob_url);
        }
        setState('imgList', (p) => p.filter(item => item.id !== id));
        showNotification(i18nService.t('store_imageDeletedNotification', { fileName: fileName }), 'success');
    }
}

export function reconvertImage(id: string, fileName: string) {
    showNotification(i18nService.t('store_reconvertingNotification', { fileName: fileName }), 'success');
    convertImage(id);
}

export const appState = state;
export const setAppState = setState;
