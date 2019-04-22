import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import { Consumer } from './Root';

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

const Header = ({
  className,
  component: Component,
  classes,
  menuIcon,
  menuHidden,
  style,
  position,
  theme,
  children,
  toolbarProps,
  ...props
}) => (
  <Consumer>
    {({
      clipped,
      collapsed,
      collapsible,
      collapsedWidth,
      setCollapse,
      navPermanent,
      navVariant,
      navWidth,
      // Defined Breakpoint in Root's props
      open,
      setOpen,
      breakpoint,
      isBelowBreakpoint,
    }) => {
      const getWidth = () => {
        if (isBelowBreakpoint) {
          if (
            breakpoint.variant === 'persistent' &&
            breakpoint.squeeze &&
            open
          ) {
            return `calc(100% - ${navWidth}px)`;
          }
          return '100%';
        }
        if (navVariant === 'persistent' && open) {
          return `calc(100% - ${navWidth}px)`;
        }
        if (clipped) {
          return '100%';
        }
        if (navPermanent && collapsible) {
          return `calc(100% - ${collapsed ? collapsedWidth : navWidth}px)`;
        }
        return '100%';
      };
      const getMargin = () => {
        if (isBelowBreakpoint) {
          if (breakpoint.variant === 'persistent' && open) {
            return navWidth;
          }
          return 0;
        }
        if (navVariant === 'persistent' && open) {
          return navWidth;
        }
        if (clipped) {
          return 0;
        }
        if (navPermanent && collapsible) {
          return collapsed ? collapsedWidth : navWidth;
        }
        return 0;
      };
      const getNextScreen = () => {
        const index = theme.breakpoints.keys.indexOf(breakpoint.value);
        return (
          theme.breakpoints.keys[index + 1] || theme.breakpoints.keys[index]
        );
      };
      const getZIndex = () => {
        if (!isBelowBreakpoint && clipped) return theme.zIndex.drawer + 1;
        return theme.zIndex.appBar;
      };
      const renderMenuIcon = () => (
        <IconButton onClick={setOpen} className={classes.menuButton}>
          {menuIcon}
        </IconButton>
      );
      return (
        <AppBar
          color={'default'}
          position={position}
          elevation={0}
          {...props}
          className={`${className} ${classes.root}`}
          style={{
            ...style,
            zIndex: getZIndex(),
            width: getWidth(),
            marginLeft: getMargin(),
          }}
        >
          <Toolbar {...toolbarProps}>
            {!menuHidden &&
              menuIcon &&
              (breakpoint && navVariant === 'permanent' ? (
                <Hidden
                  implementation={'css'}
                  {...{ [`${getNextScreen()}Up`]: true }}
                >
                  {renderMenuIcon()}
                </Hidden>
              ) : (
                renderMenuIcon()
              ))}
            {typeof children === 'function'
              ? children({
                  open,
                  setOpen,
                  collapsed,
                  setCollapse,
                  isBelowBreakpoint,
                })
              : children}
          </Toolbar>
        </AppBar>
      );
    }}
  </Consumer>
);

Header.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
  position: PropTypes.string,
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]).isRequired,
  toolbarProps: PropTypes.shape({}),
  menuHidden: PropTypes.bool,
  menuIcon: PropTypes.node,
};
Header.defaultProps = {
  className: '',
  menuHidden: false,
  component: 'div',
  style: {},
  position: 'relative',
  toolbarProps: {},
  menuIcon: '',
};

export default withTheme()(withStyles(styles, { name: 'MuiHeader' })(Header));
