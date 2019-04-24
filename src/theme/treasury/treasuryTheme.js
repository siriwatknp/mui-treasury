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
  },
  palette: {
    primary,
    background,
  },
  shape: {
    borderRadius: muiBaseTheme.spacing.unit,
  },
  overrides,
  props: {
    MuiTypography: {
      variant: 'body1',
    },
  },
};

export default createMuiTheme(theme);
