import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Consumer } from './Root';

const styles = ({ transitions }) => ({
  root: {},
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: transitions.create(['width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  content: {
    overflow: 'auto',
  },
});

const Nav = ({
  className,
  component: Component,
  classes,
  header,
  children,
  ...props
}) => (
  <Consumer>
    {({
      collapsed,
      setCollapse,
      collapsedWidth,
      navPermanent,
      navWidth,
      navVariant,
      // Defined Breakpoint in Root's props
      open,
      setOpen,
      breakpoint,
      isBelowBreakpoint,
    }) => {
      const getPosition = () => {
        if (isBelowBreakpoint) return breakpoint.variant;
        if (navPermanent) return 'permanent';
        return navVariant;
      };
      const getWidth = () => {
        if (isBelowBreakpoint || !collapsed) return navWidth;
        return collapsedWidth;
      };
      return (
        <Drawer
          {...props}
          className={`${className} ${classes.root}`}
          open={open}
          onClose={setOpen}
          variant={getPosition()}
        >
          <div className={classes.container} style={{ width: getWidth() }}>
            {typeof header === 'function'
              ? header({
                  isBelowBreakpoint,
                  collapsed,
                  setCollapse,
                  open,
                  setOpen,
                })
              : header}
            <div className={classes.content}>
              {typeof children === 'function'
                ? children({
                    isBelowBreakpoint,
                    collapsed,
                    setCollapse,
                    open,
                    setOpen,
                  })
                : children}
            </div>
          </div>
        </Drawer>
      );
    }}
  </Consumer>
);

Nav.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};
Nav.defaultProps = {
  className: '',
  component: 'div',
  header: null,
};

export default withStyles(styles, { name: 'MuiNav' })(Nav);
