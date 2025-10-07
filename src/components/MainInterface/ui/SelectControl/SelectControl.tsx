import type { JSX } from 'solid-js';
import { For } from 'solid-js';
import * as styles from './SelectControl.css.ts';
import QuestionCircleFillIcon from '~icons/bi/question-circle-fill';
import { i18nService } from '../../../../i18n/i18nService';

interface Option {
    readonly value: string;
    readonly label: string;
}

interface SelectControlProps {
    label: string;
    value: string;
    onChange: JSX.EventHandler<HTMLSelectElement, Event>;
    options: readonly Option[];
    id?: string;
    extraClass?: string;
    labelHref?: string;
}

export default function SelectControl(props: SelectControlProps) {
    return (
        <div class={styles.control_group}>
            <div class={styles.label_wrapper}>
                <label class={styles.label} for={props.id}>{props.label}</label>
                {props.labelHref && (
                    <a href={props.labelHref} class={styles.label_link} title={i18nService.t('ui_viewExplanationTitle')}><QuestionCircleFillIcon /></a>
                )}
            </div>
            <select
                id={props.id}
                class={`${styles.select} ${props.extraClass || ''}`}
                value={props.value}
                onChange={props.onChange}
            >
                <For each={props.options}>{(option) =>
                    <option value={option.value}>{option.label}</option>
                }</For>
            </select>
        </div>
    );
}