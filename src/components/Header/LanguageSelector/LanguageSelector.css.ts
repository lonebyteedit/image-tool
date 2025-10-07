import { style, globalStyle } from '@vanilla-extract/css';

export const languageSwitcher = style({
    position: 'relative',
    display: 'inline-block',
    zIndex: 100,
});

export const button = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--bg-secondary)',
    border: '2px solid var(--border-color)',
    borderRadius: '12px',
    padding: '11px 16px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: 600,
    color: 'var(--text-primary)',
    transition: 'var(--transition)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    borderColor: 'var(--primary)',
    selectors: {
        '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 20px rgba(67, 97, 238, 0.4)',
        }
    }
});

export const chevronIcon = style({
    fontSize: '0.9rem',
    transition: 'transform 0.3s ease',
    color: 'var(--text-secondary)',
});

// Rotate chevron when the switcher has the 'is-open' class
globalStyle(`.is-open .${chevronIcon}`, {
    transform: 'rotate(180deg)',
});

export const menu = style({
    position: 'absolute',
    top: 'calc(100% + 10px)',
    right: 0,
    background: 'var(--bg-secondary)',
    borderRadius: '16px',
    border: '2px solid var(--border-color)',
    boxShadow: '0 12px 36px rgba(0, 0, 0, .1)',
    padding: '15px',
    width: '800px',
    maxWidth: '90vw',
    zIndex: 100,
    maxHeight: '70vh',
    overflowY: 'auto',
    opacity: 0,
    transform: 'translateY(-10px) scale(0.95)',
    pointerEvents: 'none',
    transitionProperty: 'opacity, transform',
    transitionDuration: '0.3s',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
    '@media': {
        '(max-width: 768px)': {
            width: '80vw',
            right: 'auto',
            left: '50%',
            transform: 'translateX(-50%) translateY(-10px) scale(0.95)',
        }
    }
});

// Show the menu when the switcher has the 'is-open' class
globalStyle(`.is-open .${menu}`, {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    pointerEvents: 'auto',
    '@media': {
        '(max-width: 768px)': {
            transform: 'translateX(-50%) translateY(0) scale(1)',
        }
    }
});

export const columns = style({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '8px',
    marginBottom:'20px',
    '@media': {
        '(max-width: 768px)': {
            gridTemplateColumns: '1fr',
        }
    }
});

export const item = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 8px',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    marginBottom: '4px',
    selectors: {
        '&:last-child': {
            marginBottom: 0,
        },
        '&:hover': {
            backgroundColor: 'var(--bg-tertiary)',
        }
    }
});

export const item_active = style({
    fontWeight: 700,
    color: 'var(--primary)',
    backgroundColor: 'rgba(67, 97, 238, 0.1)',
});

export const LanguagesTitle = style({
    display: 'block',
    padding: '0px 5px 10px',
    marginBottom: '10px',
    fontSize: '14px',
    fontWeight: 'bolder',
    color: 'var(--text-secondary)',
    letterSpacing: '0.05em',
    borderBottom: '1px solid var(--border-color)',
});

export const checkIcon = style({
    color: 'var(--primary)',
});

export const languageIcon = style({
    fontSize: '20px',
    color: 'var(--primary)',
    display: 'flex',
    alignItems: 'center',
});

globalStyle(`html[dir="rtl"] .${menu}`, {
    right: 'auto',
    left: 0,
    direction: 'ltr'
});

globalStyle(`html[dir="rtl"] .${menu} > *`, {
    direction: 'rtl'
});
