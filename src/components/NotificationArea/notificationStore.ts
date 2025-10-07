import { createStore } from 'solid-js/store';

export interface Notification {
    id: number;
    message: string;
    type: 'success' | 'failed';
    isExiting?: boolean;
}

const [notifications, setNotifications] = createStore<Notification[]>([]);

let nextId = 0;

function showNotification(message: string, type: Notification['type'] = 'success', duration = 3000) {
    const id = nextId++;
    const notification: Notification = { id, message, type, isExiting: false };

    setNotifications(n => [...n, notification]);

    setTimeout(() => {
        setNotifications(n => n.id === id, 'isExiting', true);

        setTimeout(() => {
            setNotifications(n => n.filter(item => item.id !== id));
        }, 300);
    }, duration);
}

export { notifications, showNotification };
