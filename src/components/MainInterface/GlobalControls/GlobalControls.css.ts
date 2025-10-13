import { style, globalStyle } from '@vanilla-extract/css';

export const controls = style({
    padding: '20px',
    borderRadius: 'var(--border-radius)',
    background: 'var(--bg-tertiary)',
    height: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
});

export const actions = style({
    display: 'flex',
    gap: '15px',
    marginTop: '25px',
    flexWrap: 'wrap',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
        }
    }
});

// This handles the specific case of .actions inside .controls
globalStyle(`${controls} .${actions}`, {
    justifyContent: 'flex-end',
});

globalStyle(`${actions} > *`, {
    flexGrow: 1,
});