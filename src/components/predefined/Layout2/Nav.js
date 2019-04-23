import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';
import { LayoutContext } from './Root';

const styles = ({ transitions, palette, spacing, zIndex, shadows }) => ({
  root: {},
  container: {
    overflow: 'hidden',
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    transition: transitions.create(['width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  collapseButton: {
    backgroundColor: palette.grey[100],
    textAlign: 'center',
    borderRadius: 0,
    minHeight: 40,
  },
  closeButton: {
    position: 'absolute',
    bottom: spacing.unit * 2,
    zIndex: zIndex.modal + 1,
    background: palette.common.white,
    boxShadow: shadows[2],
  },
});

const Nav = ({
  className,
  component: Component,
  classes,
  header,
  children,
  collapsedIcon,
  ...props
}) => {
  const ctx = useContext(LayoutContext);
  const {
    open,
    setOpen,
    navVariant,
    navAnchor,
    navWidth,
    collapsedWidth,
    collapsible,
    collapsed,
    setCollapse,
  } = ctx;
  const getWidth = () => {
    if (collapsible && collapsed) return collapsedWidth;
    return navWidth;
  };
  const shouldRenderButton = collapsible && collapsedIcon;
  const contentRef = useRef(null);
  return (
    <React.Fragment>
      <Drawer
        {...props}
        className={`${className} ${classes.root}`}
        open={open}
        onClose={setOpen}
        variant={navVariant}
        anchor={navAnchor}
      >
        <div className={classes.container} style={{ width: getWidth() }}>
          {typeof header === 'function' ? header(ctx) : header}
          <div ref={contentRef} className={classes.content}>
            {typeof children === 'function' ? children(ctx) : children}
          </div>
          {shouldRenderButton && (
            <div className={classes.collapseButton}>
              <Button fullWidth onClick={setCollapse}>
                {collapsed
                  ? collapsedIcon.active
                  : collapsedIcon.inactive || collapsedIcon.active}
              </Button>
            </div>
          )}
        </div>
      </Drawer>
      <Fade in={open && navVariant === 'temporary' && collapsedIcon}>
        <IconButton
          className={classes.closeButton}
          style={{ left: navWidth + 16 }}
          onClick={setOpen}
        >
          {collapsedIcon.inactive}
        </IconButton>
      </Fade>
    </React.Fragment>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  collapsedIcon: PropTypes.shape({
    inactive: PropTypes.node.isRequired,
    active: PropTypes.node,
  }),
};
Nav.defaultProps = {
  className: '',
  component: 'div',
  header: null,
  collapsedIcon: null,
};

export default withStyles(styles, { name: 'MuiNav' })(Nav);
