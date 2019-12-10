import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { useLayoutCtx } from '../hooks';
import { useTransitionStyles } from '../styles';

const useStyles = makeStyles(() => ({
  root: {
    left: 0,
  },
}));

const Header = ({ className, children, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { header, getHeaderStyle } = ctx;
  const styles = useStyles();
  const transitionStyles = useTransitionStyles();
  const theme = useTheme();
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      position={header.position}
      className={cx(styles.root, transitionStyles.root, className)}
      style={{
        ...style,
        ...getHeaderStyle(theme),
      }}
    >
      {typeof children === 'function' ? children(ctx) : children}
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  style: PropTypes.shape({}),
};
Header.defaultProps = {
  className: undefined,
  children: null,
  style: undefined,
};

export default Header;
