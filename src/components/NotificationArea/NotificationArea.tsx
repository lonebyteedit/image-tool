import { For, createSignal } from 'solid-js';
import { notifications } from './notificationStore.ts';
import * as styles from './NotificationArea.css.ts';
import CircleCheckIcon from '~icons/fa6-solid/circle-check';
import CircleExclamationIcon from '~icons/fa6-solid/circle-exclamation';

export default function NotificationArea() {
    const iconComponent = (type: string) => {
        if (type === 'success') return <CircleCheckIcon />;
        if (type === 'failed') return <CircleExclamationIcon />;
    };

    return (
        <div class={styles.notification_container}>
            <For each={notifications}>
                {(notification) => {
                    const [isShown, setIsShown] = createSignal(false);

                    const setRef = () => {
                        requestAnimationFrame(() => {
                            setIsShown(true);
                        });
                    };

                    return (
                        <div
                            ref={setRef}
                            class={styles.notification}
                            classList={{
                                [styles[notification.type]]: true,
                                [styles.show]: isShown() && !notification.isExiting,
                            }}
                        >
                            {iconComponent(notification.type)}
                            <span class={styles.notification_message}>{notification.message}</span>
                        </div>
                    );
                }}
            </For>
        </div>
    );
}
