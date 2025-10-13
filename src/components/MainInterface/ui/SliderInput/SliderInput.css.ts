import { style, globalStyle } from '@vanilla-extract/css';

export const control_group = style({
    marginBottom: '20px',
});

export const label_layout = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '5px',
});

export const label_wrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
});

export const label_link = style({
    fontSize: '1.2rem',
    color: 'var(--primary)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
});

export const label = style({
    display: 'block',
    color: 'var(--text-primary)',
    fontWeight: 'bold',
});

export const value = style({
    fontWeight: 700,
    color: 'var(--primary)',
    fontSize: '18px',
});

export const slider_container = style({
    position: 'relative',
    width: '100%',
    height: '22px', // Height to contain the thumb
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none', // Prevent text selection while dragging
});

export const track_bg = style({
    position: 'absolute',
    width: '100%',
    height: '8px',
    background: 'var(--light-gray)',
    borderRadius: '10px',
});

export const track_fg = style({
    position: 'absolute',
    height: '8px',
    background: 'var(--primary)',
    borderRadius: '10px',
    width: 'var(--slider-percentage)',
});

export const thumb = style({
    position: 'absolute',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: 'var(--primary)',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.1s ease',
    touchAction: 'none',
    left: 'calc(var(--slider-percentage) - 11px)',
    selectors: {
        'html[dir="rtl"] &': {
            left: 'auto',
            right: 'calc(var(--slider-percentage) - 11px)',
        }
    }
});

globalStyle(`html[dir="rtl"] .${track_fg}`, {
    left: 'auto',
    right: 0,
});
