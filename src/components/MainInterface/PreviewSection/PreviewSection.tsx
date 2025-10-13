import { For, Show, createSignal, onMount } from 'solid-js';
import { i18nService } from '../../../i18n/i18nService';
import type { Format, ImageObject } from '../../../store/store';
import { appState, deleteAll, setAppState, deleteImage, reconvertImage, formatFileSize, formatImageType, getFormatOptions } from '../../../store/store';
import { showNotification } from '../../NotificationArea/notificationStore.ts';
import Button from '../ui/Button/Button';
import SliderInput from '../ui/SliderInput/SliderInput';
import SelectControl from '../ui/SelectControl/SelectControl';
import * as styles from './PreviewSection.css.ts';
import EyeIcon from '~icons/fa6-solid/eye';
import DownloadIcon from '~icons/fa6-solid/download';
import TrashCanIcon from '~icons/fa6-solid/trash-can';
import ImagesIcon from '~icons/fa6-solid/images';
import FileLinesIcon from '~icons/fa6-solid/file-lines';
import CircleInfoIcon from '~icons/fa6-solid/circle-info';
import SpinnerIcon from '~icons/fa6-solid/spinner';
import CompressIcon from '~icons/fa6-solid/down-left-and-up-right-to-center';
import TriangleExclamationIcon from '~icons/fa6-solid/triangle-exclamation';
import RotateIcon from '~icons/fa6-solid/rotate';
import ChevronDownIcon from '~icons/fa6-solid/chevron-down';

export default function PreviewSection() {

    const [isZipMenuOpen, setIsZipMenuOpen] = createSignal(false);
    let zipMenuRef: HTMLDivElement | undefined;

    onMount(() => {
        if (typeof document !== 'undefined') {
            document.addEventListener('click', (e: MouseEvent) => {
                if (zipMenuRef && !zipMenuRef.contains(e.target as Node)) {
                    setIsZipMenuOpen(false);
                }
            });
        }
    });

    const handleDownloadAll = () => {
        const completedImages = appState.imgList.filter(img => img.convertState === 'completed' && img.target_blob_url);
        if (completedImages.length === 0) {
            showNotification(i18nService.t('previewSection_noCompletedFilesNotification'), 'failed');
            return;
        }

        showNotification(i18nService.t('previewSection_downloadStartedNotification', { fileCount: completedImages.length }), 'success');
        completedImages.forEach((img, index) => {
            setTimeout(() => {
                if (img.downloadFileType === undefined || img.target_blob_url === null) return
                const link = document.createElement('a');
                link.href = img.target_blob_url;
                link.download = `${img.fileBaseName}.${img.downloadFileType.toLowerCase()}`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }, index * 300); // Stagger downloads
        });
    };

    const handleDeleteAll = () => {
        if (appState.imgList.length === 0) {
            showNotification(i18nService.t('previewSection_listEmptyNotification'), 'failed');
            return;
        }
        deleteAll();
        showNotification(i18nService.t('previewSection_allDeletedNotification'), 'success');
    };

    const handleDownloadAsZip = async () => {
        const completedImages = appState.imgList.filter(img => img.convertState === 'completed' && img.target_blob_url);
        if (completedImages.length === 0) {
            showNotification(i18nService.t('previewSection_noCompletedFilesNotification'), 'failed');
            return;
        }

        const hasUnconvertedImages = appState.imgList.some(img => img.convertState !== 'completed');
        if (hasUnconvertedImages) {
            showNotification(i18nService.t('previewSection_zipCreationWithSkipsNotification'));
        } else {
            showNotification(i18nService.t('previewSection_zipCreationNotification'));
        }

        try {
            const { default: JSZip } = await import('jszip');
            const zip = new JSZip();
            const usedNames = new Set();

            for (const img of completedImages) {
                if (img.convertState === 'completed' && img.target_blob_url && img.downloadFileType) {
                    const response = await fetch(img.target_blob_url);
                    const blob = await response.blob();

                    const baseName = img.fileBaseName;
                    const extension = img.downloadFileType.toLowerCase();
                    let filename = `${baseName}.${extension}`;
                    let counter = 1;

                    while (usedNames.has(filename)) {
                        filename = `${baseName} (${counter}).${extension}`;
                        counter++;
                    }
                    usedNames.add(filename);

                    zip.file(filename, blob);
                }
            }

            const zipBlob = await zip.generateAsync({ type: 'blob' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(zipBlob);
            link.download = 'images.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(link.href);

        } catch (error) {
            console.error("[Error creating ZIP file]:", error);
            showNotification(i18nService.t('previewSection_zipCreationErrorNotification'), 'failed');
        }
    };

    return (
        <div class={styles.preview_section}>
            <div class={styles.section_header_with_actions}>
                <h2 class={styles.preview_section_title}><EyeIcon /> {i18nService.t('previewSection_title')}</h2>
                <div class={styles.actions}>
                    <div
                        class={styles.split_button_container}
                        ref={zipMenuRef}
                    >
                        <Button
                            onClick={() => {
                                handleDownloadAll();
                                setIsZipMenuOpen(false);
                            }}
                        >
                            <DownloadIcon /> {i18nService.t('previewSection_downloadAllButton')}
                        </Button>
                        <Button
                            class={styles.split_button_toggle}
                            onClick={(e) => { e.stopPropagation(); setIsZipMenuOpen(!isZipMenuOpen()); }}
                        >
                            <ChevronDownIcon />
                        </Button>
                        <Show when={isZipMenuOpen()}>
                            <div class={styles.split_button_menu}>
                                <Button
                                    onClick={() => { handleDownloadAsZip(); setIsZipMenuOpen(false); }}
                                    style={{ width: '100%' }}
                                >
                                    zip
                                </Button>
                            </div>
                        </Show>
                    </div>
                    <Button onClick={handleDeleteAll} modifier="warning">
                        <TrashCanIcon /> {i18nService.t('previewSection_deleteAllButton')}
                    </Button>
                </div>
            </div>
            <Show when={appState.imgList.length > 0} fallback={
                <div class={styles.placeholder}>
                    <ImagesIcon style={{ color: "var(--primary)" }} />
                    <p>{i18nService.t('previewSection_placeholder')}</p>
                </div>
            }>
                <div class={styles.image_list_container}>
                    <ul class={styles.image_list}>
                        <For each={appState.imgList}>
                            {(item) => {
                                const [activeTab, setActiveTab] = createSignal('comparison');


                                const statusMessages: Record<ImageObject['convertState'], string> = {
                                    pending: i18nService.t('previewSection_statusPending'),
                                    converting: i18nService.t('previewSection_statusConverting'),
                                    failed: i18nService.t('previewSection_statusFailed'),
                                    completed: i18nService.t('previewSection_statusCompleted')
                                };
                                const setLocalValue = (key: 'localQuality' | 'localSize' | 'localFormat', value: number | Format) => {
                                    setAppState('imgList', (img) => img.id === item.id, key, value as any);
                                };

                                const handleDownload = (e: MouseEvent) => {
                                    e.stopPropagation();
                                    const { fileBaseName, target_blob_url, downloadFileType } = item;
                                    if (target_blob_url === null || downloadFileType === undefined) {
                                        showNotification(i18nService.t('previewSection_waitConversionNotification'), 'failed');
                                        return;
                                    }

                                    const link = document.createElement('a');
                                    link.href = target_blob_url;
                                    link.download = `${fileBaseName}.${downloadFileType.toLowerCase()}`;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                    showNotification(i18nService.t('previewSection_downloadingFileNotification', { fileName: link.download }), 'success');
                                };

                                return (
                                    <li class={`${styles.list_item} ${item.isExpanded ? styles.expanded : ''}`}>
                                        <div class={styles.item_main_content} onClick={() => setAppState(
                                            'imgList',
                                            (img) => img.id === item.id,
                                            'isExpanded',
                                            (prev) => !prev
                                        )}>
                                            <img src={item.original_blob_url} alt="Original Thumbnail" class={styles.item_thumbnail} />
                                            <div class={styles.item_info_wrapper}>
                                                <div dir='ltr' class={styles.file_name} title={item.original.name}>{item.original.name}</div>
                                                <div class={styles.file_details}>
                                                    <div class={styles.size_info}>
                                                        <Show when={item.convertState === 'pending'}>
                                                            <span><FileLinesIcon /> {i18nService.t('previewSection_originalSizeLabel')} &lrm;{formatFileSize(item.originalFileSize)}</span>
                                                            <span><CircleInfoIcon /> {statusMessages.pending}</span>
                                                        </Show>
                                                        <Show when={item.convertState === 'converting'}>
                                                            <span><SpinnerIcon class={styles.spinnerIcon} /> {statusMessages.converting}</span>
                                                        </Show>
                                                        <Show when={item.convertState === 'completed'}>
                                                            <span><FileLinesIcon /> {i18nService.t('previewSection_originalSizeLabel')} &lrm;{formatFileSize(item.originalFileSize)}</span>
                                                            <span class={`${styles.conversion_ratio} ${item.targetFileSize < item.originalFileSize ? styles.decrease : styles.increase}`}>
                                                                &lrm;{Math.round((item.targetFileSize / item.originalFileSize - 1) * 100)}%
                                                            </span>
                                                            <span><CompressIcon /> {i18nService.t('previewSection_convertedSizeLabel')} &lrm;{formatFileSize(item.targetFileSize)}</span>
                                                        </Show>
                                                        <Show when={item.convertState === 'failed'}>
                                                            <span><FileLinesIcon /> {i18nService.t('previewSection_originalSizeLabel')} &lrm;{formatFileSize(item.originalFileSize)}</span>
                                                            <span><TriangleExclamationIcon /> {statusMessages.failed}</span>
                                                        </Show>
                                                    </div>
                                                    <div class={styles.text_buttons}>
                                                        <Button
                                                            variant="text"
                                                            modifier="download"
                                                            title={i18nService.t('previewSection_downloadTitle')}
                                                            onClick={handleDownload}
                                                        >
                                                            <DownloadIcon />
                                                        </Button>
                                                        <Button variant="text" title={i18nService.t('previewSection_previewTitle')} onClick={(e) => {
                                                            e.stopPropagation();
                                                            setAppState(
                                                                'imgList',
                                                                (img) => img.id === item.id,
                                                                'isExpanded',
                                                                (prev) => !prev
                                                            )
                                                        }}>
                                                            <EyeIcon />
                                                        </Button>
                                                        <Button variant="text" modifier="delete" title={i18nService.t('previewSection_deleteTitle')} onClick={(e) => { e.stopPropagation(); deleteImage(item.id, item.original.name) }}>
                                                            <TrashCanIcon />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class={styles.item_details_expanded}>
                                            <div class={styles.expanded_tabs_nav}>
                                                <button class={`${styles.expanded_tab_btn} ${activeTab() === 'comparison' ? styles.active : ''}`} onClick={() => setActiveTab('comparison')}>{i18nService.t('previewSection_comparisonTab')}</button>
                                                <button class={`${styles.expanded_tab_btn} ${activeTab() === 'settings' ? styles.active : ''}`} onClick={() => setActiveTab('settings')}>{i18nService.t('previewSection_settingsTab')}</button>
                                            </div>
                                            <div class={styles.expanded_content_wrapper}>

                                                <div class={`${styles.expanded_image_box} ${activeTab() === 'settings' ? styles.hide_on_mobile : ''}`}>
                                                    <h4>{i18nService.t('previewSection_originalImageLabel')}</h4>
                                                    <div class={styles.expanded_image_info}>
                                                        <span>{i18nService.t('previewSection_formatLabel')} {item.originalType}</span>
                                                        <span>{i18nService.t('previewSection_resolutionLabel')} &lrm;{item.originalDimensions}</span>
                                                    </div>
                                                    <div class={styles.expanded_image_preview}>
                                                        <img
                                                            src={item.original_blob_url} alt="Original Preview"
                                                            onClick={() => window.open(item.original_blob_url ? item.original_blob_url : '', '_blank')}
                                                        />
                                                    </div>
                                                    <a class={styles.view_large_btn} href={item.original_blob_url} target="_blank">{i18nService.t('previewSection_viewLargerButton')}</a>
                                                </div>
                                                <div class={`${styles.expanded_image_box} ${activeTab() === 'settings' ? styles.hide_on_mobile : ''}`}>
                                                    <h4>{i18nService.t('previewSection_completedImageLabel')}</h4>
                                                    <div class={styles.expanded_image_info}>
                                                        <span>{i18nService.t('previewSection_formatLabel')} {item.targetType ? formatImageType(item.targetType) : ""}</span>
                                                        <span>{i18nService.t('previewSection_resolutionLabel')} &lrm;{item.targetDimensions}</span>
                                                    </div>
                                                    <div
                                                        class={`${styles.expanded_image_preview}`}
                                                        style={{ cursor: item.convertState === 'completed' ? 'pointer' : 'not-allowed' }}
                                                    >
                                                        <Show when={item.convertState === 'completed' && item.target_blob_url} fallback={
                                                            <div class={styles.expanded_placeholder}>
                                                                {statusMessages[item.convertState]}
                                                            </div>
                                                        }>
                                                            {(url) => (
                                                                <img
                                                                    src={url()}
                                                                    alt="Completed Preview"
                                                                    onClick={() => window.open(url(), '_blank')}
                                                                />
                                                            )}
                                                        </Show>
                                                    </div>
                                                    <a
                                                        class={styles.view_large_btn}
                                                        classList={{ disabled: item.convertState !== 'completed' }}
                                                        href={item.target_blob_url === null ? "" : item.target_blob_url}
                                                        onClick={(e) => { if (item.convertState !== 'completed') e.preventDefault() }}
                                                        target="_blank"
                                                    >
                                                        {i18nService.t('previewSection_viewLargerButton')}
                                                    </a>
                                                </div>

                                                <div class={`${styles.expanded_controls_box} ${activeTab() === 'comparison' ? styles.hide_on_mobile : ''}`}>
                                                    <SliderInput
                                                        label={i18nService.t('previewSection_qualityLabel')}
                                                        labelHref="#quality-option"
                                                        value={item.localQuality}
                                                        min={1}
                                                        max={100}
                                                        unit="%"
                                                        onInput={(e) => setLocalValue('localQuality', e)}
                                                    />
                                                    <SliderInput
                                                        label={i18nService.t('previewSection_sizeLabel')}
                                                        labelHref="#size-option"
                                                        value={item.localSize}
                                                        min={1}
                                                        max={100}
                                                        unit="%"
                                                        onInput={(e) => setLocalValue('localSize', e)}
                                                    />
                                                    <SelectControl
                                                        label={i18nService.t('previewSection_outputFormatLabel')}
                                                        labelHref="#format-option"
                                                        value={item.localFormat}
                                                        onChange={(value) => setLocalValue('localFormat', value as Format)}
                                                        options={getFormatOptions()}
                                                        extraClass="local-format-select"
                                                    />
                                                    <Button size="sm" style={{ "width": "100%" }} onClick={() => reconvertImage(item.id, item.original.name)}>
                                                        <RotateIcon /> {i18nService.t('previewSection_reconvertButton')}
                                                    </Button>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                )
                            }}
                        </For>
                    </ul>
                </div>
            </Show>
        </div>
    );
}