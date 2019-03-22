import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

export const muiBaseTheme = theme;

export const white = {
  text: '#ffffff',
  primary: 'rgba(255, 255, 255, 0.7)',
  secondary: 'rgba(255, 255, 255, 0.54)',
  disabled: 'rgba(255, 255, 255, 0.38)',
  hint: 'rgba(255, 255, 255, 0.24)',
};

export const background = {
  default: theme.palette.common.white,
};

export const shade = {
  light: '#f5f5f5',
};

export const red = {
  main: '#ff5252',
  dark: '#e04848',
};

export const primary = {
  main: '#1CE4A6',
};

export const secondary = {
  main: '#029EFD',
};

export const linked = {
  cursor: 'pointer',
  color: primary.main,
  display: 'inline-block',
};

export const linkInverted = {
  ...linked,
  color: white.primary,
  '&:hover': {
    color: theme.palette.common.white,
  },
};

export const borderColor = {
  default: theme.palette.grey[200],
};

export default {
  background,
  borderColor,
  muiBaseTheme,
  primary,
  secondary,
  red,
  shade,
  linked,
  linkInverted,
  white,
};
