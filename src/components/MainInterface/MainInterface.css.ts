import { style, globalStyle } from '@vanilla-extract/css';

export const app_container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    marginBottom: '30px',
});

export const upload_section = style({
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius)',
    padding: '25px',
    boxShadow: 'var(--card-shadow)',
    '@media': {
        '(max-width: 768px)': {
            padding: '25px 15px',
        }
    }
});

export const upload_controls_container = style({
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
        }
    }
});

export const section_title = style({
    fontSize: '1.4rem',
    marginBottom: '20px',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

globalStyle(`${section_title} svg`, {
    color: 'var(--primary)',
});
