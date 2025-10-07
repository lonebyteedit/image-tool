import { style, globalStyle } from '@vanilla-extract/css';

export const footer = style({
    background: 'var(--bg-secondary)',
    borderRadius: '20px',
    padding: '30px',
    marginTop: '30px',
    border: '1px solid var(--border-color)',
    boxShadow: 'var(--card-shadow)',
    textAlign: 'center',
    transition: 'all .3s ease'
});

export const footerLinks = style({
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginBottom: '20px',
    flexWrap: 'wrap'
});

export const footerLink = style({
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all .3s ease',
    position: 'relative',
    selectors: {
        '&:hover': {
            color: 'var(--primary)',
            transform: 'translateY(-2px)'
        },
        '&:hover::after': {
            content: '',
            position: 'absolute',
            bottom: '-3px',
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--primary)',
            borderRadius: '2px'
        }
    }
});

export const footerCopyright = style({
    color: 'var(--text-secondary)',
    fontSize: '14px',
    marginTop: '15px',
    paddingTop: '15px',
    borderTop: '1px solid var(--border-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
});

globalStyle(`${footerLink} .icon`, {
    fontSize: '14px',
    display: 'inline-flex',
    alignItems: 'center'
});
