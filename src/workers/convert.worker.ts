import { encode as jpegEncode, decode as jpegDecode } from '@jsquash/jpeg';
import { decode as pngDecode } from '@jsquash/png';
import { optimise as oxipngOptimise } from '@jsquash/oxipng';
import { encode as webpEncode, decode as webpDecode } from '@jsquash/webp';
import { encode as avifEncode, decode as avifDecode } from '@jsquash/avif';
import * as libheif from 'libheif-js/wasm-bundle';
import quantize from '../libs/imagequant';
import resize from '@jsquash/resize';

import type { ImageObject } from '../store/store.ts';

// --- 1. Type Definitions ---

// Detailed data of the image processing task passed in from store.ts
interface ImgDataToWorker {
    id: ImageObject['id'];
    currentTaskId: number;
    originalType: ImageObject['originalType'];
    localSize: ImageObject['localSize'];
    targetWidth: ImageObject['targetWidth'];
    targetHeight: ImageObject['targetHeight'];
    localQuality: ImageObject['localQuality'];
    targetType: NonNullable<ImageObject['targetType']>;
}

// Worker received message format
interface WorkerMessageEvent extends MessageEvent {
    data: {
        arrayBuffer: ArrayBuffer;
        imgDataToWorker: ImgDataToWorker;
    };
}

// --- 2. Helper Functions ---

/**
 * Mixes an image with an alpha channel with a pure white background, removing transparency.
 * @param imageProcessData - The image data to process
 * @returns - Image data with transparency removed
 */
function flattenToWhite(imageProcessData: ImageData): ImageData {
    const t1 = performance.now();
    const { data } = imageProcessData;
    const backgroundR = 255, backgroundG = 255, backgroundB = 255;

    for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha < 255) {
            const normalizedAlpha = alpha / 255;
            data[i] = (data[i] * normalizedAlpha) + (backgroundR * (1 - normalizedAlpha));
            data[i + 1] = (data[i + 1] * normalizedAlpha) + (backgroundG * (1 - normalizedAlpha));
            data[i + 2] = (data[i + 2] * normalizedAlpha) + (backgroundB * (1 - normalizedAlpha));
            data[i + 3] = 255;
        }
    }
    const t2 = performance.now();
    console.log(`[flattenToWhite time] ${t2 - t1}ms`);
    return imageProcessData;
}

// --- 3. Worker Main Logic ---

self.onmessage = async (event: WorkerMessageEvent) => {
    const { arrayBuffer, imgDataToWorker } = event.data;

    try {
        let imageProcessData: ImageData;

        // Step 1: Decode
        console.log(`Decode Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
        const t1 = performance.now();
        switch (imgDataToWorker.originalType) {
            case "JPG":
                imageProcessData = await jpegDecode(arrayBuffer, { preserveOrientation: true });
                break;
            case "WEBP":
                imageProcessData = await webpDecode(arrayBuffer);
                break;
            case "PNG":
                imageProcessData = await pngDecode(arrayBuffer);
                break;
            case "AVIF":
                const decodedAvif = await avifDecode(arrayBuffer);
                if (!decodedAvif) {
                    throw new Error('[Failed to decode AVIF image]');
                }
                imageProcessData = decodedAvif;
                break;
            case "HEIC":
                const decoder = new libheif.HeifDecoder();
                const images = decoder.decode(arrayBuffer);
                if (!images || images.length === 0) {
                    throw new Error('[Failed to decode HEIC image]: No images found.');
                }
                const image = images[0];
                const width = image.get_width();
                const height = image.get_height();
                const imageDataBuffer = new Uint8ClampedArray(width * height * 4);
                await new Promise((resolve, reject) => {
                    image.display({ data: imageDataBuffer, width, height }, (displayData: any) => {
                        if (!displayData) {
                            return reject(new Error('[Failed to decode HEIC image]: Display data is null.'));
                        }
                        resolve(undefined);
                    });
                });
                imageProcessData = new ImageData(imageDataBuffer, width, height);
                break;
            default:
                throw new Error(`[worker originalType UNKNOWN]  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
        }
        const t2 = performance.now();
        console.log(`Decode End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t2 - t1)}`);

        // Step 2: Resize
        if (imgDataToWorker.localSize < 100) {
            console.log(`Resize Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
            const t3 = performance.now();
            imageProcessData = await resize(imageProcessData, {
                width: imgDataToWorker.targetWidth,
                height: imgDataToWorker.targetHeight
            });
            const t4 = performance.now();
            console.log(`Resize End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t4 - t3)}`);
        }

        // Step 3: Encode
        let outputBuffer: ArrayBuffer;
        const encodeOptions = { quality: imgDataToWorker.localQuality };
        console.log(`Encode Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
        const t5 = performance.now();

        switch (imgDataToWorker.targetType) {
            case 'JPG':
                imageProcessData = flattenToWhite(imageProcessData);
                outputBuffer = await jpegEncode(imageProcessData, encodeOptions);
                break;

            case 'lossy-PNG':
                const t5_1 = performance.now();
                console.log(`quantize Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
                imageProcessData = await quantize(imageProcessData, { maxNumColors: 256, dither: 1 });
                const t5_2 = performance.now();
                console.log(`quantize End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t5_2 - t5_1)}`);

                const t7_1 = performance.now();
                console.log(`oxipngOptimise Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
                outputBuffer = await oxipngOptimise(imageProcessData, { level: 4, optimiseAlpha: true });
                const t7_2 = performance.now();
                console.log(`oxipngOptimise End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t7_2 - t7_1)}`);
                break;

            case 'lossless-PNG':
                const t9_1 = performance.now();
                console.log(`oxipngOptimise Start  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}`);
                outputBuffer = await oxipngOptimise(imageProcessData, { level: 4, optimiseAlpha: true });
                const t9_2 = performance.now();
                console.log(`oxipngOptimise End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t9_2 - t9_1)}`);
                break;

            case 'lossy-WEBP':
                outputBuffer = await webpEncode(imageProcessData, { ...encodeOptions, lossless: 0, alpha_compression: 1 });
                break;

            case 'lossless-WEBP':
                outputBuffer = await webpEncode(imageProcessData, { ...encodeOptions, lossless: 1, alpha_compression: 1 });
                break;

            case 'lossy-AVIF':
                outputBuffer = await avifEncode(imageProcessData, { ...encodeOptions, lossless: false });
                break;

            case 'lossless-AVIF':
                outputBuffer = await avifEncode(imageProcessData, { lossless: true });
                break;
        }

        const t6 = performance.now();
        console.log(`Encode End  id: ${imgDataToWorker.id}  currentTaskId: ${imgDataToWorker.currentTaskId}  Time: ${Math.round(t6 - t5)}`);

        // Step 4: Send the result back to the main thread
        self.postMessage({
            success: true,
            imageProcessData: outputBuffer
        }, { transfer: [outputBuffer] });

    } catch (error) {
        console.error('[worker]', error);
        self.postMessage({ success: false, error: (error as Error).message });
    }
};