// custom typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme();

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={baseTheme}>{element}</ThemeProvider>
);
