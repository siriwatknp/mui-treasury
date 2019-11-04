import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { useLayoutCtx } from '../layoutContext';
import transitionStyles from '../styles/transition.styles';

const useStyles = makeStyles(({ zIndex, transitions }) => ({
  root: ({ clipped, position }) => {
    const isHeaderOnTop =
      clipped && (position === 'fixed' || position === 'absolute');
    return {
      ...(isHeaderOnTop && { zIndex: zIndex.drawer + 100 }),
      ...transitionStyles({ transitions }).root,
    };
  },
}));

const Header = ({ className, children, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { header, getSidebarGap, getWidth } = ctx;
  const styles = useStyles(header);
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      position={header.position}
      className={cx(styles.root, className)}
      style={{
        ...style,
        marginLeft: getSidebarGap(header),
        width: getWidth(header),
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
