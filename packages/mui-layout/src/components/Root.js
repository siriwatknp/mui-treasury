import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import { LayoutProvider, LayoutConsumer } from '../core/layoutContext';
import * as styles from '../styles';

const baseTheme = createMuiTheme();
const useSidebarStyles = makeStyles(styles.sidebarStyles);
const useHeaderStyles = makeStyles(styles.headerStyles);
const useContainerStyles = makeStyles(styles.containerStyles);

// eslint-disable-next-line react/prop-types
const Layout = ({ children, ...props }) => {
  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  const containerStyles = useContainerStyles();
  return (
    <LayoutProvider {...props}>
      {typeof children === 'function' ? (
        <LayoutConsumer>
          {ctx =>
            children({ sidebarStyles, headerStyles, containerStyles, ...ctx })
          }
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
