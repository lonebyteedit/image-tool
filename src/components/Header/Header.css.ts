import { style, globalStyle } from '@vanilla-extract/css';

export const header = style({
    textAlign: 'center',
    padding: '0 20px 0',
    position: 'relative',
});

export const headerContent = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            paddingBottom: '10px',
            gap: '10px',
        }
    }
});

export const controlsWrapper = style({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
});

export const logo = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '10px',
    '@media': {
        '(max-width: 768px)': {
            gap: '6px',
        }
    }
});

// For child selectors like '.logo i', we use globalStyle
globalStyle(`${logo} svg`, {
    width: '45px',
    height: '45px',
});

export const title = style({
    fontSize: '34px',
    color: 'var(--primary)',
    fontWeight: 700,
    transform: 'translateY(5px)',
    '@media': {
        '(max-width: 768px)': {
            fontSize: '28px',
            transform: 'translateY(7px)',
        }
    }
});

export const logoLink = style({
    textDecoration: 'none',
});

