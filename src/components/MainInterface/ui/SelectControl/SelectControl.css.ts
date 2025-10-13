import { style, globalStyle } from '@vanilla-extract/css';

export const control_group = style({
    marginBottom: '20px',
});

export const label_wrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '8px',
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
    fontWeight: "bold",
});

// New styles for the custom select
export const select_container = style({
    position: 'relative',
});

export const select_trigger = style({
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    fontSize: '16px',
    cursor: 'pointer',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'var(--transition)',
    selectors: {
        '&:focus': {
            outline: 'none',
            borderColor: 'var(--primary)',
            boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.2)',
        }
    }
});

export const select_trigger_icon = style({
    transition: 'transform 0.2s ease-in-out',
    color: 'var(--text-secondary)',
});

globalStyle(`${select_trigger}[aria-expanded="true"] .${select_trigger_icon}`, {
    transform: 'rotate(180deg)',
});

export const select_menu = style({
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    right: 0,
    backgroundColor: 'var(--bg-secondary)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, .1)',
    padding: '5px',
    zIndex: 30,
    overflowY: 'auto',
});

export const select_option = style({
    padding: '8px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    selectors: {
        '&:hover': {
            backgroundColor: 'var(--bg-tertiary)',
        },
        '&[data-selected="true"]': {
            backgroundColor: 'var(--primary)',
            color: 'white',
            fontWeight: 'bold',
        }
    }
});

globalStyle(`html[dir="rtl"] .${select_trigger}`, {
    textAlign: 'right',
});
