import type { JSX } from 'solid-js';
import { For } from 'solid-js';
import * as styles from './OptionsExplanation.css.ts';

interface OptionText {
    id: string;
    title: string;
    description: JSX.Element;
}

interface OptionsExplanationTexts {
    title: string;
    subtitle: string;
    options: OptionText[];
}

interface OptionsExplanationProps {
    texts: OptionsExplanationTexts;
}

export default function OptionsExplanation(props: OptionsExplanationProps) {
    return (
        <div class={styles.simple_options}>
            <div class={styles.section_header}>
                <h2 class={styles.section_title}>{props.texts.title}</h2>
                <p class={styles.section_subtitle}>{props.texts.subtitle}</p>
            </div>

            <div class={styles.options_list}>
                <For each={props.texts.options}>{(option, index) =>
                    <div id={option.id} class={styles.option_item}>
                        <div class={styles.option_header}>
                            <div class={styles.option_badge}>{index() + 1}</div>
                            <h3 class={styles.option_title}>{option.title}</h3>
                        </div>
                        <div class={styles.option_description}>
                            {option.description}
                        </div>
                    </div>
                }</For>
            </div>
        </div>
    );
}
