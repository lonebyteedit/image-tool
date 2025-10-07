import { style, globalStyle, keyframes } from '@vanilla-extract/css';

export const preview_section = style({
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--border-radius)',
    padding: '35px 25px 25px 25px',
    boxShadow: 'var(--card-shadow)',
    '@media': {
        '(max-width: 768px)': {
            padding: '25px 15px',
        }
    }
});

export const preview_section_title = style({
    fontSize: '1.4rem',
    marginBottom: '0px',
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    '@media': {
        '(max-width: 768px)': {
            marginBottom: '15px',
        }
    }
});

globalStyle(`${preview_section_title} svg`, {
    color: 'var(--primary)',
});

export const placeholder = style({
    color: 'var(--text-secondary)',
    textAlign: 'center',
    padding: '40px 20px',
});

globalStyle(`${placeholder} svg`, {
    fontSize: '3rem',
    marginBottom: '15px',
    color: 'var(--border-color)',
});

export const image_list_container = style({
    background: 'var(--bg-tertiary)',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    marginTop: '20px',
});

export const image_list = style({
    listStyle: 'none',
});

export const list_item = style({
    borderBottom: '1px solid var(--border-color)',
    transition: 'background-color 0.2s, padding-bottom 0.3s ease',
    padding: '15px 20px',
    selectors: {
        '&:last-child': {
            borderBottom: 'none',
        }
    },
    '@media': {
        '(max-width: 768px)': {
            padding: '15px 10px',
        }
    }
});

export const item_main_content = style({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    cursor: 'pointer',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
        }
    }
});

export const item_thumbnail = style({
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    objectFit: 'cover',
    backgroundColor: 'var(--bg-tertiary)',
    flexShrink: 0,
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
            height: '150px',
            marginBottom: '10px',
        }
    }
});

export const item_info_wrapper = style({
    flexGrow: 1,
    minWidth: 0,
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
        }
    }
});

export const file_name = style({
    fontWeight: 600,
    color: 'var(--text-primary)',
    marginBottom: '8px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export const file_details = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
        }
    }
});

export const size_info = style({
    display: 'flex',
    gap: '15px',
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    flexWrap: 'wrap',
});

globalStyle(`${size_info} span`, {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
});

globalStyle(`${size_info} svg`, {
    fontSize: '0.9rem',
});

const spin = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

export const spinnerIcon = style({
    color: 'var(--primary)',
    animation: `${spin} 2s linear infinite`,
});

export const text_buttons = style({
    display: 'flex',
    gap: '5px',
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
            justifyContent: 'flex-end',
            marginTop: '10px',
        }
    }
});

export const conversion_ratio = style({
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    transition: 'color 0.3s, background-color 0.3s',
    color: 'var(--gray)',
    background: 'rgba(108, 117, 125, 0.15)',
    direction: 'ltr',
    unicodeBidi: 'isolate',
});

export const decrease = style({});
export const increase = style({});

globalStyle(`${conversion_ratio}.${decrease}`, {
    color: 'var(--success)',
    background: 'rgba(76, 201, 240, 0.15)',
});

globalStyle(`${conversion_ratio}.${increase}`, {
    color: 'var(--accent)',
    background: 'rgba(247, 37, 133, 0.15)',
});

export const item_details_expanded = style({
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.4s ease-out, padding-top 0.4s ease-out',
    paddingTop: 0,
});

export const expanded = style({});

globalStyle(`${list_item}.${expanded} .${item_details_expanded}`, {
    maxHeight: '600px',
    paddingTop: '20px',
    '@media': {
        '(max-width: 768px)': {
            maxHeight: '1000px',
        }
    }
});

export const expanded_tabs_nav = style({
    display: 'none',
    '@media': {
        '(max-width: 768px)': {
            display: 'flex',
            gap: '5px',
            marginBottom: '15px',
            border: '1px solid var(--border-color)',
            borderRadius: '50px',
            padding: '4px',
            backgroundColor: 'var(--bg-primary)',
        }
    }
});

export const expanded_tab_btn = style({
    '@media': {
        '(max-width: 768px)': {
            flex: 1,
            padding: '8px 10px',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            borderRadius: '50px',
            fontSize: '0.9rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'var(--transition)',
        }
    }
});

export const active = style({});

globalStyle(`${expanded_tab_btn}.${active}`, {
    '@media': {
        '(max-width: 768px)': {
            background: 'var(--primary)',
            color: 'white',
            boxShadow: '0 3px 10px rgba(67, 97, 238, 0.3)',
        }
    }
});

export const expanded_content_wrapper = style({
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
        }
    }
});

export const hide_on_mobile = style({
    '@media': {
        '(max-width: 768px)': {
            display: 'none !important',
        }
    }
});

export const expanded_image_box = style({
    flex: 1,
    minWidth: 0,
    background: 'var(--bg-primary)',
    padding: '15px',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    flexDirection: 'column',
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
        }
    }
});

export const expanded_controls_box = style({
    flex: 1,
    minWidth: 0,
    background: 'var(--bg-primary)',
    padding: '15px',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    flexDirection: 'column',
    '@media': {
        '(max-width: 768px)': {
            width: '100%',
        }
    }
});

globalStyle(`${expanded_image_box} h4`, {
    fontSize: '1rem',
    color: 'var(--text-primary)',
    textAlign: 'center',
    marginBottom: '10px',
});

export const expanded_image_info = style({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '5px 20px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    marginBottom: '10px',
});

globalStyle(`${expanded_image_info} span`, {
    fontWeight: 500,
    textAlign: 'center',
    flexShrink: 0,
});

export const expanded_image_preview = style({
    width: '100%',
    height: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--bg-tertiary)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
});

globalStyle(`${expanded_image_preview} img`, {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
});

export const view_large_btn = style({
    background: 'rgba(67, 97, 238, 0.1)',
    border: '1px solid var(--primary)',
    color: 'var(--primary)',
    padding: '6px 12px',
    marginTop: '10px',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 500,
    alignSelf: 'center',
    transition: 'var(--transition)',
    textDecoration: 'none', //  <-- Add this line to remove the underline
    selectors: {
        '&:hover': {
            backgroundColor: 'rgba(67, 97, 238, 0.2)',
            borderColor: 'var(--primary-light)',
        },
        '&.disabled': {
            color: 'var(--gray)',
            backgroundColor: 'var(--bg-tertiary)',
            borderColor: 'var(--light-gray)',
            cursor: 'not-allowed',
        }
    }
});

export const expanded_placeholder = style({
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
});

globalStyle(`${expanded_controls_box} .control-group:last-child`, {
    marginBottom: '10px',
});

export const section_header_with_actions = style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'stretch',
        }
    }
});

export const actions = style({
    display: 'flex', // Base style for the container
    gap: '10px',     // Base style for the container
    '@media': {
        '(max-width: 768px)': {
            flexDirection: 'column',
        }
    }
});

export const split_button_container = style({
    position: 'relative',
    zIndex: 20,
    display: 'inline-flex',
    alignItems: 'stretch',
    borderRadius: '10px',
    boxShadow: '0 1px 4px rgba(67, 97, 238, 0.3)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    selectors: {
        '&:has(> button:active)': {
            transform: 'scale(0.97)',
            boxShadow: '0 1px 4px rgba(67, 97, 238, 0.3)',
        }
    },
    '@media': {
        '(max-width: 768px)': {
            display: 'flex',
        },
        '(min-width: 769px)': {
            selectors: {
                'body:not(.pointer-coarse) &:has(> button:hover):not(:has(> button:active))': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 6px 20px rgba(67, 97, 238, 0.4)',
                },
            }
        }
    }
});

globalStyle(`${split_button_container} > button`, {
    transform: 'none !important',
    boxShadow: 'none !important',
});

globalStyle(`${split_button_container} > button:first-child`, {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '@media': {
        '(max-width: 768px)': {
            flexGrow: 1,
        }
    }
});

export const split_button_toggle = style({
    paddingLeft: '8px',
    paddingRight: '8px',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
});

export const split_button_menu = style({
    position: 'absolute',
    top: 'calc(100% + 5px)',
    right: 0,
    zIndex: 10,
    background: 'var(--bg-secondary)',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, .1)',
    padding: '5px',
    minWidth: '100%',
});