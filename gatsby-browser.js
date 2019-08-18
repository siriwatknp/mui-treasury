// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Root, createDefaultLayout } from '@mui-treasury/layout';

const layoutConfig = createDefaultLayout({
  navWidth: 288,
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
  clipped: true,
  headerPosition: 'sticky',
});
const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#005DB2',
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

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={baseTheme}>
    <Root config={layoutConfig}>{element}</Root>
  </ThemeProvider>
);
