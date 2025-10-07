import { splitProps, type JSX } from "solid-js";
import * as styles from './Button.css.ts';

type ButtonProps = {
    variant?: 'primary' | 'text';
    modifier?: 'normal' | 'warning' | 'download' | 'delete';
    size?: 'sm' | 'normal';
    children: JSX.Element;
    class?: string;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
    const [local, others] = splitProps(props, ["variant", "modifier", "size", "children", "class"]);
    
    const variant = local.variant || 'primary';
    const modifier = local.modifier || 'normal';
    const size = local.size || 'normal';

    const classList = () => {
        const classes = [
            variant === 'primary' ? styles.btn : styles.text,
            size === 'sm' && styles.sm,
            local.class
        ];

        if (modifier === 'warning') {
            classes.push(styles.warning);
        } else if (modifier === 'download') {
            classes.push(styles.download);
        } else if (modifier === 'delete') {
            classes.push(styles.del);
        }

        return classes.filter(Boolean).join(" ");
    }

    return (
        <button class={classList()} {...others}>
            {local.children}
        </button>
    );
}