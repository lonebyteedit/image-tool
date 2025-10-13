import type { JSX } from 'solid-js';
import { createSignal, createEffect, For, Show, onMount, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import * as styles from './SelectControl.css.ts';
import QuestionCircleFillIcon from '~icons/bi/question-circle-fill';
import ChevronDownIcon from '~icons/fa6-solid/chevron-down';
import { i18nService } from '../../../../i18n/i18nService';

interface Option {
    readonly value: string;
    readonly label: string;
}

interface SelectControlProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: readonly Option[];
    id?: string;
    extraClass?: string;
    labelHref?: string;
}

export default function SelectControl(props: SelectControlProps) {
    const [isOpen, setIsOpen] = createSignal(false);
    const [menuStyle, setMenuStyle] = createSignal<JSX.CSSProperties>({});
    let containerRef: HTMLDivElement | undefined;
    let triggerRef: HTMLButtonElement | undefined;

    const selectedLabel = () => {
        const selected = props.options.find(opt => opt.value === props.value);
        return selected ? selected.label : '';
    };

    const handleOptionClick = (optionValue: string) => {
        props.onChange(optionValue);
        setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (containerRef && !containerRef.contains(e.target as Node)) {
            setIsOpen(false);
        }
    };

    // This effect calculates the position of the dropdown menu when it opens
    createEffect(() => {
        if (isOpen() && triggerRef) {
            const rect = triggerRef.getBoundingClientRect();
            setMenuStyle({
                position: 'absolute',
                top: `${rect.bottom + window.scrollY}px`,
                left: `${rect.left + window.scrollX}px`,
                width: `${rect.width}px`,
            });
        }
    });

    if (typeof window !== 'undefined') {
        onMount(() => {
            document.addEventListener('click', handleClickOutside);
        });
        onCleanup(() => {
            document.removeEventListener('click', handleClickOutside);
        });
    }

    return (
        <div class={styles.control_group}>
            <div class={styles.label_wrapper}>
                <label class={styles.label} for={props.id}>{props.label}</label>
                {props.labelHref && (
                    <a href={props.labelHref} class={styles.label_link} title={i18nService.t('ui_viewExplanationTitle')}><QuestionCircleFillIcon /></a>
                )}
            </div>

            <div class={`${styles.select_container} ${props.extraClass || ''}`} ref={containerRef}>
                <button
                    ref={triggerRef}
                    id={props.id}
                    class={styles.select_trigger}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen()}
                    onClick={() => setIsOpen(!isOpen())}
                >
                    <span>{selectedLabel()}</span>
                    <span class={styles.select_trigger_icon}><ChevronDownIcon /></span>
                </button>

                <Show when={isOpen()}>
                    <Portal mount={document.body}>
                        <div class={styles.select_menu} role="listbox" style={menuStyle()}>
                            <For each={props.options}>{(option) =>
                                <div
                                    class={styles.select_option}
                                    role="option"
                                    aria-selected={props.value === option.value}
                                    data-selected={props.value === option.value}
                                    onClick={() => handleOptionClick(option.value)}
                                >
                                    {option.label}
                                </div>
                            }</For>
                        </div>
                    </Portal>
                </Show>
            </div>
        </div>
    );
}