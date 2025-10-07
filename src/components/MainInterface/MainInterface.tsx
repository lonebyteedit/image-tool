import AddArea from './addArea/addArea';
import GlobalControls from './GlobalControls/GlobalControls';
import PreviewSection from './PreviewSection/PreviewSection';
import * as styles from './MainInterface.css.ts';
import CloudArrowUpIcon from '~icons/fa6-solid/cloud-arrow-up';
import { i18nService } from '../../i18n/i18nService';

export default function MainInterface() {
    return (
        <div class={styles.app_container}>
            <div class={styles.upload_section}>
                <h2 class={styles.section_title}><CloudArrowUpIcon /> {i18nService.t('addSection_title')}</h2>
                <div class={styles.upload_controls_container}>
                    <AddArea />
                    <GlobalControls />
                </div>
            </div>

            <PreviewSection />
        </div>
    );
}