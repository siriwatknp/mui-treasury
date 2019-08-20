import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#007aac',
    },
    background: {
      default: '#fff',
    },
    divider: '#f0f0f2',
  },
  typography: {
    fontFamily: "'Fira Sans', sans-serif",
  },
});

export const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default theme;
