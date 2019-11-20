import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { LayoutProvider, LayoutConsumer } from '../core/layoutContext';
import { useSidebarStyles, useHeaderStyles } from '../styles';

const baseTheme = createMuiTheme();

const Layout = ({ children, ...props }) => {
  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  return (
    <LayoutProvider {...props}>
      {typeof children === 'function' ? (
        <LayoutConsumer>
          {ctx => children({ sidebarStyles, headerStyles, ...ctx })}
        </LayoutConsumer>
      ) : (
        children
      )}
    </LayoutProvider>
  );
};

const Root = ({ theme, omitThemeProvider, ...props }) => {
  if (omitThemeProvider) {
    return <Layout {...props} />;
  }
  return (
    <ThemeProvider theme={theme || baseTheme}>
      <Layout {...props} />
    </ThemeProvider>
  );
};

Root.propTypes = {
  theme: PropTypes.shape({}),
  omitThemeProvider: PropTypes.bool,
};
Root.defaultProps = {
  omitThemeProvider: undefined,
  theme: undefined,
};

export default Root;
