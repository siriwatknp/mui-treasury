import Color from 'color';
import { getThemeColor } from '@mui-treasury/utils';

export const bannerFormControlLabelStyles = ({ palette }) => ({
  root: ({ color = palette.primary.main }) => ({
    padding: '1rem 1rem 1rem 0.5rem',
    margin: 0,
    transition: '0.3s',
    borderRadius: 3,
    width: '100%',
    '&:hover': {
      backgroundColor: Color(getThemeColor(palette, color))
        .rotate(-6)
        .fade(0.9)
        .toString(),
    },
  }),
  label: {
    marginLeft: '0.25rem',
  },
  disabled: {
    '&&:hover': {
      backgroundColor: 'unset',
    },
  },
});

export const bannerCheckboxStyles = () => ({
  root: {
    marginTop: -9,
    alignSelf: 'flex-start',
  },
});

export const bannerSubtitleStyles = ({ palette }) => ({
  root: {
    display: 'block',
    color: palette.text.hint,
    fontSize: '0.875rem',
  },
});
