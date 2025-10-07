import * as styles from './Description.css';

interface DescriptionProps {
    text: string;
}

export default function Description(props: DescriptionProps) {
    return (
        <div class={styles.description_card}>
            <p class={styles.description_text}>
                {props.text}
            </p>
        </div>
    );
}
