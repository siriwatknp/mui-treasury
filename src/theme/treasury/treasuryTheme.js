/* eslint-disable max-len */
import { createMuiTheme } from '@material-ui/core/styles';
import variables, { primary, muiBaseTheme, background } from './variables';

const req = require.context('./components', true, /.js$/);
let overrides = {};

req.keys().forEach(filename => {
  overrides = {
    ...overrides,
    ...req(filename).default(variables),
  };
});

const theme = {
  typography: {
    useNextVariants: true,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  palette: {
    primary,
    background,
  },
  shape: {
    borderRadius: muiBaseTheme.spacing(1),
  },
  overrides,
  props: {
    MuiTypography: {
      variant: 'body1',
    },
  },
};

export default createMuiTheme(theme);
