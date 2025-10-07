import * as styles from './Footer.css';
import GithubIcon from '~icons/fa6-brands/github';
import ShieldHalvedIcon from '~icons/fa6-solid/shield-halved';
import FileLinesIcon from '~icons/fa6-solid/file-lines';

export default function Footer() {
    return (
        <div class={styles.footer}>
            <div class={styles.footerLinks}>
                <a href="/privacy-policy/" class={styles.footerLink} target="_blank">
                    <span class="icon"><ShieldHalvedIcon /></span>
                    <span>Privacy Policy</span>
                </a>
                <a href="/terms-of-service/" class={styles.footerLink} target="_blank">
                    <span class="icon"><FileLinesIcon /></span>
                    <span>Terms of Service</span>
                </a>
                <a href="https://github.com/lonebyteedit/image-tool" class={styles.footerLink} target="_blank">
                    <span class="icon"><GithubIcon /></span>
                    <span>Github</span>
                </a>
            </div>
            <div class={styles.footerCopyright}>
                <span>© 2025 IMAGE TOOL</span>
            </div>
        </div>
    );
}
