import { type JSX, splitProps } from 'solid-js';
import * as styles from './Legal.css';

interface LegalDocProps {
    title: string;
    children?: JSX.Element;
}

export default function LegalDoc(props: LegalDocProps) {
    const [local] = splitProps(props, ["title", "children"]);
    return (
        <div class={styles.legal_container}>
            <h1 class={styles.legal_title}>{local.title}</h1>
            <div class={styles.legal_content}>
                {local.children}
            </div>
        </div>
    );
}