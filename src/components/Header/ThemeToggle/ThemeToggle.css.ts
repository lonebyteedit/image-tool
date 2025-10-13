import { style, globalStyle } from '@vanilla-extract/css';

export const themeToggle = style({
    background: 'var(--bg-secondary)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--card-shadow)',
    color: 'var(--text-primary)',
    border: '2px solid var(--border-color)',
    fontSize: '20px',
    zIndex: 100,
    transition: 'var(--transition)',
    borderColor: 'var(--primary)',
    selectors: {
        '&:hover': {
            transform: 'translateY(-3px)',
            color: 'var(--primary)',
            boxShadow: '0 6px 20px rgba(67, 97, 238, 0.4)',
        }
    },
});

globalStyle(`${themeToggle} i`, {
    lineHeight: 1,
});

// Styles for icon toggling
globalStyle(`${themeToggle} .dark-icon`, {
    display: 'none'
});

globalStyle(`${themeToggle} .light-icon`, {
    display: 'flex'
});

globalStyle(`html.dark-mode ${themeToggle} .dark-icon`, {
    display: 'flex'
});

globalStyle(`html.dark-mode ${themeToggle} .light-icon`, {
    display: 'none'
});
