import type { Format } from '../../../store/store';
import { appState, setAppState, reconvertAll, restoreAll, getFormatOptions } from '../../../store/store';
import { showNotification } from '../../NotificationArea/notificationStore.ts';
import SliderInput from '../ui/SliderInput/SliderInput';
import SelectControl from '../ui/SelectControl/SelectControl';
import Button from '../ui/Button/Button';
import * as styles from './GlobalControls.css.ts';
import RotateIcon from '~icons/fa6-solid/rotate';
import ArrowRotateLeftIcon from '~icons/fa6-solid/arrow-rotate-left';
import { i18nService } from '../../../i18n/i18nService';

export default function GlobalControls() {



    const handleReconvertAll = () => {
        if (appState.imgList.length === 0) {
            showNotification(i18nService.t('globalControls_noImagesNotification'), 'failed');
            return;
        }
        showNotification(i18nService.t('globalControls_reconvertingAllNotification', { imageCount: appState.imgList.length }), 'success');
        reconvertAll();
    };

    const handleRestore = () => {
        restoreAll();
        showNotification(i18nService.t('globalControls_restoredNotification'), 'success');
    };

    return (
        <div style={{ flex: 1 }}>
            <div class={styles.controls}>
                <SliderInput
                    label={i18nService.t('globalControls_qualityLabel')}
                    labelHref="#quality-option"
                    value={appState.quality}
                    min={1}
                    max={100}
                    unit="%"
                    onInput={(e) => setAppState('quality', e)}
                />
                <SliderInput
                    label={i18nService.t('globalControls_sizeLabel')}
                    labelHref="#size-option"
                    value={appState.size}
                    min={1}
                    max={100}
                    unit="%"
                    onInput={(e) => setAppState('size', e)}
                />
                <SelectControl
                    label={i18nService.t('globalControls_formatLabel')}
                    labelHref="#format-option"
                    id="formatSelect"
                    value={appState.format}
                    onChange={(value) => setAppState('format', value as Format)}
                    options={getFormatOptions()}
                />
                <div class={styles.actions} style={{ "margin-top": "auto" }}>
                    <Button onClick={handleReconvertAll}>
                        <RotateIcon /> {i18nService.t('globalControls_reconvertAllButton')}
                    </Button>
                    <Button onClick={handleRestore} modifier="warning">
                        <ArrowRotateLeftIcon /> {i18nService.t('globalControls_restoreDefaultsButton')}
                    </Button>
                </div>
            </div>
        </div>

    );
}