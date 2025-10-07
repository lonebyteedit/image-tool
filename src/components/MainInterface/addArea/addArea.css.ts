import { style, globalStyle } from '@vanilla-extract/css';

export const drop_area_container = style({
    flex: 1,
    minWidth: 0,
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
        }
    }
});

export const upload_area = style({
    border: '3px dashed var(--border-color)',
    borderRadius: 'var(--border-radius)',
    padding: '30px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'var(--transition)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'var(--bg-tertiary)',
    height: '100%',
});

export const drag_over = style({});

globalStyle(`${upload_area}:hover, ${upload_area}.${drag_over}`, {
    borderColor: 'var(--primary)',
    backgroundColor: 'rgba(67, 97, 238, 0.05)',
});

export const upload_icon = style({
    fontSize: '3rem',
    color: 'var(--primary-light)',
});

export const upload_text = style({
    marginBottom: '15px',
    color: 'var(--text-secondary)',
});

globalStyle(`${upload_text} h3`, {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: 'var(--text-primary)',
});

export const hidden = style({
    display: 'none',
});