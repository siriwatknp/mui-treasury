import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';

const useStyles = makeStyles(({ zIndex }) => ({
  root: ({ clipped, position }) => {
    const isHeaderOnTop = clipped && position !== 'static';
    return {
      ...(isHeaderOnTop && { zIndex: zIndex.drawer + 100 }),
    };
  },
}));
const useTransitionStyles = makeStyles(transitionStyles);

const Header = ({ className, children, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { header, getHeaderStyle } = ctx;
  const styles = useStyles(header);
  const tStyles = useTransitionStyles();
  // if (typeof window === 'undefined') {
  //   return (
  //     <div className={cx('LayoutHeader', styles.root, tStyles.root, className)}>
  //       {children}
  //     </div>
  //   );
  // }
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      position={header.position}
      className={cx(styles.root, tStyles.root, className)}
      style={{
        ...style,
        ...getHeaderStyle(),
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
