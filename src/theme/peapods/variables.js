import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

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
  light: '#ff867f',
  dark: '#c50e29',
};

export const primary = {
  main: '#1CE4A6',
  dark: '#00b177',
  light: '#6cffd8',
};

export const secondary = {
  main: '#029EFD',
  light: '#69cfff',
  dark: '#0070c9',
};

export const borderColor = {
  default: theme.palette.grey[200],
};

export default createMuiTheme({
  palette: {
    primary,
    secondary,
    background,
  },
  shape: {
    borderRadius: 8,
  },
  background,
  borderColor,
  primary,
  secondary,
  red,
  shade,
  white,
});
