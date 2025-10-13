import { handleFiles } from '../../../store/store';
import { createSignal } from 'solid-js';
import * as styles from './addArea.css.ts';
import Button from '../ui/Button/Button';
import CloudArrowUpIcon from '~icons/fa6-solid/cloud-arrow-up';
import FolderOpenIcon from '~icons/fa6-solid/folder-open';
import { i18nService } from '../../../i18n/i18nService';

export default function addArea() {
    let fileInputRef: HTMLInputElement | undefined;
    const [isDragOver, setIsDragOver] = createSignal(false);

    const onDrop = (e: DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        if (e.dataTransfer?.files.length) {
            console.log("Files received from drop event:", e.dataTransfer.files);

            handleFiles(e.dataTransfer.files);
        }
    };

    const onDragOver = (e: DragEvent) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const onDragLeave = () => {
        setIsDragOver(false);
    };

    const onFileSelect = (e: Event) => {
        const target = e.currentTarget as HTMLInputElement;
        if (target.files) {
            handleFiles(target.files);
        }
    };

    return (
        <div class={styles.drop_area_container}>
            <div
                class={styles.upload_area}
                classList={{ [styles.drag_over]: isDragOver() }}
                onClick={() => fileInputRef?.click()}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
            >
                <div class={styles.upload_icon}>
                    <CloudArrowUpIcon />
                </div>
                <div class={styles.upload_text}>
                    <h3>{i18nService.t('addArea_dragDropTitle')}</h3>
                    <p>{i18nService.t('addArea_supportedFormats')}</p>
                </div>
                <Button>
                    <FolderOpenIcon /> {i18nService.t('addArea_selectButton')}
                </Button>
                <div class={styles.upload_text} style={{ "font-size": "14px", "margin-top": "6px" }}>
                    <p>{i18nService.t('addArea_tips')}</p>
                </div>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={onFileSelect}
                    accept="image/jpeg,image/png,image/webp,image/avif,image/heic,image/heif"
                    multiple
                    class={styles.hidden}
                />
            </div>
        </div>
    );
}
