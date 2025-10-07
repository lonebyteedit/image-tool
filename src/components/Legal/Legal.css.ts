import { style, globalStyle } from '@vanilla-extract/css';

export const legal_container = style({
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius)',
    padding: '40px 50px',
    boxShadow: 'var(--card-shadow)',
    maxWidth: '1000px',
    margin: '20px auto',
    '@media': {
        '(max-width: 768px)': {
            padding: '25px 20px',
        }
    }
});

export const legal_title = style({
    fontSize: '2rem',
    color: 'var(--text-primary)',
    marginBottom: '25px',
    textAlign: 'center',
    borderBottom: '1px solid var(--border-color)',
    paddingBottom: '20px',
});

export const legal_content = style({
    color: 'var(--text-secondary)',
    lineHeight: 1.7,
});

globalStyle(`${legal_content} h2`, {
    fontSize: '1.5rem',
    color: 'var(--text-primary)',
    marginTop: '30px',
    marginBottom: '15px',
});

globalStyle(`${legal_content} p`, {
    marginBottom: '15px',
});

globalStyle(`${legal_content} ul`, {
    marginBottom: '15px',
    paddingLeft: '20px',
});

globalStyle(`${legal_content} li`, {
    marginBottom: '8px',
});

globalStyle(`${legal_content} a`, {
    color: 'var(--primary)',
    textDecoration: 'none',
});

globalStyle(`${legal_content} a:hover`, {
    textDecoration: 'underline',
});