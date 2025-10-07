import { style, globalStyle } from '@vanilla-extract/css';

export const notification_container = style({
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'flex-end',
    '@media': {
        '(max-width: 768px)': {
            right: '5vw',
        }
    }
});

globalStyle(`html[dir="rtl"] .${notification_container}`, {
    alignItems: 'flex-start',
});

export const notification = style({
    color: '#ffffff',
    padding: '18px 24px',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transform: 'translateX(110%)',
    transition: 'transform 0.3s ease',
    fontSize: '16px',
    maxWidth: '400px',
    '@media': {
        '(max-width: 768px)': {
            maxWidth: "90vw"
        }
    }
});

export const success = style({
    background: 'var(--primary)',
    boxShadow: '0 0 20px rgba(67, 97, 238, 0.6)',
});

export const failed = style({
    background: 'var(--danger)',
    boxShadow: '0 0 20px rgba(239, 68, 68, 0.6)',
});

export const show = style({
    transform: 'translateX(0)',
});

export const notification_message = style({
    overflowWrap: 'break-word',
    minWidth: 0,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
});

globalStyle(`${notification} svg`, {
    fontSize: "18px",
    flexShrink: 0,
});