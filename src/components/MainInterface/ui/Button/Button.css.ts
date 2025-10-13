import { style, globalStyle } from '@vanilla-extract/css';

export const btn = style({
    background: 'var(--primary)',
    color: 'white',
    border: '2px solid var(--primary)',
    padding: '12px 25px',
    borderRadius: '10px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'var(--transition)',
    willChange: 'transform',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 1px 4px rgba(67, 97, 238, 0.3)',
    textDecoration: 'none',
    selectors: {
        '&:hover:not(:disabled)': {
            transform: 'translateY(-3px)',
            boxShadow: '0 6px 20px rgba(67, 97, 238, 0.4)',
        },
        '&:active:not(:disabled)': {
            transform: 'scale(0.97)',
            opacity: 0.9,
        },
        '&:disabled': {
            background: 'var(--light-gray)',
            color: 'var(--gray)',
            cursor: 'not-allowed',
            transform: 'none',
            boxShadow: 'none',
        }
    },
    '@media': {
        '(max-width: 768px)': {
            selectors: {
                '&:hover:not(:disabled)': {
                    transform: 'translateY(0px)',
                    boxShadow: 'none',
                },
                '&:active:not(:disabled)': {
                    transform: 'scale(0.97)',
                    opacity: 0.9,
                },
                '&:disabled': {
                    background: 'var(--light-gray)',
                    color: 'var(--gray)',
                    cursor: 'not-allowed',
                    transform: 'none',
                    boxShadow: 'none',
                }
            }
        }
    }
});

export const warning = style({
    background: 'var(--bg-secondary)',
    color: 'var(--primary)',
});

export const sm = style({
    padding: '8px 16px',
    fontSize: '0.9rem',
});

export const text = style({
    background: 'none',
    border: 'none',
    color: 'var(--primary)',
    cursor: 'pointer',
    fontSize: '0.95rem',
    padding: '5px 10px',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '4px',
    boxShadow: 'none',
    selectors: {
        '&:hover:not(:disabled)': {
            backgroundColor: 'rgba(67, 97, 238, 0.1)',
            transform: 'none',
            boxShadow: 'none',
        },
        '&:active:not(:disabled)': {
            transform: 'scale(0.97)',
            opacity: 0.8,
        },
        '&:disabled': {
            color: 'var(--gray)',
            cursor: 'not-allowed',
            background: 'none',
        }
    }
});

export const download = style({
    color: 'var(--success)',
});

export const del = style({
    color: 'var(--accent)',
});

// Handle compound selector for text + delete variant hover
globalStyle(`${text}.${del}:hover:not(:disabled)`, {
    backgroundColor: 'rgba(247, 37, 133, 0.1)',
});
