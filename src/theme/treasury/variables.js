import { createMuiTheme } from '@material-ui/core/styles';
import mapClasses from '../core/mapClasses';

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
  main: '#00BCD4',
  light: '#cef8fd',
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
  ...mapClasses(),
  background,
  borderColor,
  muiBaseTheme,
  primary,
  red,
  shade,
  linked,
  linkInverted,
  white,
};
