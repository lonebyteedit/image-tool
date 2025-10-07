import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';
import * as styles from './SliderInput.css.ts';
import QuestionCircleFillIcon from '~icons/bi/question-circle-fill';
import { i18nService } from '../../../../i18n/i18nService';

interface SliderInputProps {
    label: string;
    value: number;
    onInput: (value: number) => void;
    min?: number;
    max?: number;
    unit?: string;
    labelHref?: string;
}

export default function SliderInput(props: SliderInputProps) {
    let containerRef: HTMLDivElement | undefined;
    const [internalValue, setInternalValue] = createSignal(props.value);
    const [isMobile, setIsMobile] = createSignal(false);
    const [isRtl, setIsRtl] = createSignal(false);

    onMount(() => {
        // Only execute in the browser environment
        if (typeof window === 'undefined') return;

        setIsRtl(document.documentElement.dir === 'rtl');

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        
        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Define the handler for when the media query state changes
        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        // Add listener
        mediaQuery.addEventListener('change', handleChange);

        // Clean up the listener on component unmount to prevent memory leaks
        onCleanup(() => {
            mediaQuery.removeEventListener('change', handleChange);
        });
    });

    // When the external props.value changes, sync to the internal state
    createEffect(() => {
        setInternalValue(props.value);
    });

    const min = () => props.min || 0;
    const max = () => props.max || 100;
    // The visual effect is based on the instantly updated internal value
    const percentage = () => ((internalValue() - min()) / (max() - min())) * 100;

    const updateValue = (e: PointerEvent) => {
        if (!containerRef) return;

        const rect = containerRef.getBoundingClientRect();
        const x = isRtl()
            ? Math.max(0, Math.min(rect.width, rect.right - e.clientX))
            : Math.max(0, Math.min(rect.width, e.clientX - rect.left));
        const percent = x / rect.width;
        const newValue = min() + percent * (max() - min());

        // Immediately update the internal value to provide instant visual feedback
        setInternalValue(newValue);
        // Notify the parent component to update the global state
        props.onInput(newValue);
    };

    const handlePointerDown = (e: PointerEvent) => {
        if (e.button !== 0) return; // Only main button

        // Directly read the reactive state, no need to recalculate
        if (isMobile() && !(e.target as HTMLElement).classList.contains(styles.thumb)) {
            return;
        }

        containerRef?.setPointerCapture(e.pointerId);
        updateValue(e);

        const moveHandler = (moveEvent: PointerEvent) => {
            updateValue(moveEvent);
        };

        const upHandler = (upEvent: PointerEvent) => {
            containerRef?.releasePointerCapture(upEvent.pointerId);
            window.removeEventListener('pointermove', moveHandler);
            window.removeEventListener('pointerup', upHandler);
        };

        window.addEventListener('pointermove', moveHandler);
        window.addEventListener('pointerup', upHandler);
    };

    return (
        <div class={styles.control_group}>
            {/* Label and value display above */}
            <div class={styles.label_layout}>
                <div class={styles.label_wrapper}>
                    <label class={styles.label}>{props.label}</label>
                    {props.labelHref && (
                        <a href={props.labelHref} class={styles.label_link} title={i18nService.t('ui_viewExplanationTitle')}><QuestionCircleFillIcon /></a>
                    )}
                </div>
                <span class={styles.value}>
                    {/* The value display still uses the confirmed value passed from the parent component */}
                    {Math.round(props.value)}
                    {props.unit || ''}
                </span>
            </div>
            {/* Slider main container, responsible for capturing all click and drag events */}
            <div
                ref={containerRef}
                class={styles.slider_container}
                onPointerDown={handlePointerDown}
                style={{ '--slider-percentage': `${percentage()}%` }}
            >
                {/* Gray background track */}
                <div class={styles.track_bg}></div>
                {/* Colored foreground track, width determined by percentage */}
                <div class={styles.track_fg}></div>
                {/* Draggable thumb, its center is precisely aligned by calc() */}
                <div class={styles.thumb}></div>
            </div>
        </div>
    );
}