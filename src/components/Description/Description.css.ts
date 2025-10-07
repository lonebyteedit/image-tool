import { style } from '@vanilla-extract/css';

export const description_card = style({
    background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)',
    borderRadius: 'var(--border-radius)',
    padding: '25px 30px',
    boxShadow: 'var(--box-shadow)',
    color: 'white',
    maxWidth: '1000px',
    borderLeft: '4px solid var(--accent)',
    margin: '20px auto',
    '@media': {
        '(max-width: 768px)': {
            padding: '20px 10px',
            borderLeft: 'none',
            margin: '10px auto 20px',
        }
    },
    selectors: {
        '.dark-mode &': {
            background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
        }
    }
});

export const description_text = style({
    fontSize: '18px',
    margin: 0,
    lineHeight: 1.6,
    fontWeight: 500,
    '@media': {
        '(max-width: 768px)': {
            fontSize: '14px',
        }
    },
});


