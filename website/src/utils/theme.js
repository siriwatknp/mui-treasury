import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const { palette } = createMuiTheme({
  palette: {
    primary: {
      main: '#007aac',
    },
    background: {
      default: '#fff',
    },
    divider: '#f0f0f2',
  },
});

const theme = createMuiTheme({
  palette,
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        '&:hover': {
          borderBottom: 'none',
        },
      },
      label: {
        textTransform: 'initial',
      },
      contained: {
        boxShadow: 'none',
        backgroundColor: palette.grey[200],
        '&:active': {
          boxShadow: 'none',
        },
      },
      containedPrimary: {
        textShadow: '0 1px 0 rgba(0,0,0,0.2)',
        transition: '0.2s',
        background: `linear-gradient(to top, ${palette.primary.main}, #7fb8d0)`,
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: `0 4px 6px 2px rgba(0,0,0,0.2), 0px 2px 4px 0px rgba(0,0,0,0.14), inset 0 -2px 0 0 rgba(0,0,0,0.12)`,
        },
        '&:focus': {
          transform: 'translateY(0px)',
          boxShadow: 'none',
          // boxShadow: `inset 0 4px 4px 0 rgba(0,0,0,0.14)`,
        },
        '& $label': {
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        },
      },
      text: {
        padding: '6px 16px',
      },
    },
  },
});

export const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default theme;
