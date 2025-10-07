import { style, globalStyle } from '@vanilla-extract/css';

export const simple_options = style({
    margin: '50px 0 0',
});

export const section_header = style({
    textAlign: 'center',
    marginBottom: '25px',
});

export const section_title = style({
    fontSize: '1.8rem',
    color: 'var(--text-primary)',
    marginBottom: '10px',
    '@media': {
        '(max-width: 768px)': {
            fontSize: '1.5rem',
        }
    }
});

export const section_subtitle = style({
    color: 'var(--text-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
});

export const options_list = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
});

export const option_item = style({
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius)',
    padding: '25px',
    boxShadow: 'var(--card-shadow)',
    position: 'relative',
    '@media': {
        '(max-width: 768px)': {
            padding: '20px',
        }
    }
});

export const option_header = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    gap: '12px',
});

export const option_badge = style({
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    background: 'var(--primary)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    fontWeight: 600,
    flexShrink: 0,
});

export const option_title = style({
    fontSize: '1.3rem',
    color: 'var(--text-primary)',
    fontWeight: 600,
});

export const option_description = style({
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
});

globalStyle(`${option_description} p + p`, {
    marginTop: '12px',
});

globalStyle(`${option_description} ul`, {
    paddingLeft: '25px',
});

globalStyle(`html[dir="rtl"] ${option_description} ul`, {
    paddingLeft: 'unset',
    paddingRight: '25px',
});

globalStyle(`${option_item}:target`, {
    animation: 'target-flash 1s ease-in-out 3'
});
