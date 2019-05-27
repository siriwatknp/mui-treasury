/* eslint-disable max-len */
import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  typography: {
    useNextVariants: true,
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    primary: {
      main: '#3E59D9',
    },
  },
  shape: {
    borderRadius: 0,
  },
  props: {
    MuiTypography: {
      variant: 'body1',
    },
  },
};

const mergedTheme = createMuiTheme(theme);

const req = require.context('./components', true, /.js$/);
let overrides = {};

req.keys().forEach(filename => {
  overrides = {
    ...overrides,
    ...req(filename).default(mergedTheme),
  };
});

export default createMuiTheme({
  ...theme,
  overrides,
});
