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

export const select = style({
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    fontSize: '16px',
    cursor: 'pointer',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 0.75rem center',
    backgroundSize: '16px 12px',
    transition: 'var(--transition)',
    selectors: {
        '&:focus': {
            outline: 'none',
            borderColor: 'var(--primary)',
            boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.2)',
        }
    }
});

globalStyle(`html[dir="rtl"] .${select}`, {
    backgroundPosition: 'left 0.75rem center',
});