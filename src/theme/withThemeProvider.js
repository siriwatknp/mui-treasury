import React from 'react';
import {
  createGenerateClassName,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import JssProvider from 'react-jss/lib/JssProvider';
import treasuryTheme from 'theme/treasury';

const theme = createMuiTheme(treasuryTheme);

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

export default element => (
  <JssProvider generateClassName={generateClassName}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        {typeof element === 'function' ? element() : element}
      </MuiThemeProvider>
    </ThemeProvider>
  </JssProvider>
);
