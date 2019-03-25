import { createMuiTheme } from '@material-ui/core/styles';
import variables, { primary, secondary, background } from './variables';

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
  },
  palette: {
    primary,
    secondary,
    background,
  },
  shape: {
    borderRadius: 8,
  },
  overrides,
};

export default createMuiTheme(theme);
