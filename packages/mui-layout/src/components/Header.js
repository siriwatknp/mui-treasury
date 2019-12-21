import React from 'react';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import createHeader from '../models/header';
import createAllSidebars from '../models/allSidebars';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';

const useStyles = makeStyles(() => ({
  root: {
    left: 0,
  },
}));

const useTransitionStyles = makeStyles(transitionStyles);

const Header = ({ className, children, style, ...props }) => {
  const ctx = useLayoutCtx();
  const headerModel = createHeader(ctx);
  const allSidebars = createAllSidebars(ctx);
  const styles = useStyles();
  const transition = useTransitionStyles();
  const theme = useTheme();
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      position={ctx.header.position}
      className={cx(styles.root, transition.root, className)}
      style={{
        ...style,
        ...headerModel.getStyle(),
        ...allSidebars.getHeaderStyle(theme),
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
