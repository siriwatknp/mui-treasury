import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { LayoutContext } from './Root';

const styles = ({ transitions }) => ({
  root: {
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: -8,
    marginRight: 8,
  },
});

const createGet = (
  { clipped, navVariant, collapsible, collapsed, open, squeezed, navAnchor },
  normal,
  shrink,
  pushed,
  unsqueeze,
) => () => {
  if (clipped || navAnchor !== 'left') return normal;
  if (navVariant === 'persistent' && open) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return pushed;
    }
    return unsqueeze;
  }
  if (navVariant === 'permanent') {
    if (collapsible) {
      if (collapsed) return shrink;
      return pushed;
    }
    return pushed;
  }
  return normal;
};

const Header = ({
  className,
  component: Component,
  classes,
  menuIcon,
  style,
  theme,
  children,
  toolbarProps,
  ...props
}) => {
  const ctx = useContext(LayoutContext);
  const {
    clipped,
    collapsedWidth,
    navWidth,
    navVariant,
    headerPosition,
    open,
    setOpen,
  } = ctx;
  const getWidth = createGet(
    ctx,
    '100%',
    `calc(100% - ${collapsedWidth}px)`,
    `calc(100% - ${navWidth}px)`,
    '100%',
  );
  const getMargin = createGet(ctx, 0, collapsedWidth, navWidth, navWidth);
  const shouldRenderMenu = navVariant !== 'permanent' && !!menuIcon;
  return (
    <AppBar
      color={'default'}
      elevation={0}
      {...props}
      className={`${className} ${classes.root}`}
      position={headerPosition}
      style={{
        ...style,
        zIndex: clipped ? theme.zIndex.drawer + 1 : theme.zIndex.appBar,
        width: getWidth(),
        marginLeft: getMargin(),
      }}
    >
      <Toolbar {...toolbarProps}>
        {shouldRenderMenu && (
          <IconButton onClick={setOpen} className={classes.menuButton}>
            {open ? menuIcon.active : menuIcon.inactive || menuIcon.active}
          </IconButton>
        )}
        {typeof children === 'function' ? children(ctx) : children}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
  position: PropTypes.string,
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  toolbarProps: PropTypes.shape({}),
  menuIcon: PropTypes.shape({
    inactive: PropTypes.node.isRequired,
    active: PropTypes.node,
  }),
};
Header.defaultProps = {
  className: '',
  component: 'div',
  style: {},
  position: 'relative',
  toolbarProps: {},
  menuIcon: null,
};

export default withTheme(withStyles(styles, { name: 'MuiHeader' })(Header));
