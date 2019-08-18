import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import useConfig from '../hooks/useConfig';
import useHeightAdjustment from '../hooks/useHeightAdjustment';
import useAutoCollapse from '../hooks/useAutoCollapse';

const useStyles = makeStyles(
  ({ breakpoints, transitions, palette, spacing, zIndex, shadows }) => ({
    root: {},
    heightAdjustment: {
      flexShrink: 0,
      transition: transitions.create(),
    },
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
    toggleButton: {
      backgroundColor: palette.grey[50],
      textAlign: 'center',
      borderRadius: 0,
      borderTop: '1px solid',
      borderColor: 'rgba(0,0,0,0.12)',
      [breakpoints.up('sm')]: {
        minHeight: 40,
      },
    },
    closeButton: {
      position: 'absolute',
      bottom: spacing(2),
      zIndex: zIndex.modal + 1,
      background: palette.common.white,
      boxShadow: shadows[2],
      '@media (hover: none)': {
        backgroundColor: palette.grey[300],
      },
      '&:hover': {
        backgroundColor: '#e5e5e5',
      },
    },
  })
);

const Nav = ({
  className,
  header,
  children,
  renderIcon,
  toggleProps,
  ...props
}) => {
  useAutoCollapse();
  const ctx = useConfig();
  const {
    opened,
    setOpened,
    navVariant,
    navAnchor,
    navWidth,
    collapsedWidth,
    collapsible,
    collapsed,
    setCollapsed,
  } = ctx;
  const height = useHeightAdjustment();
  const getWidth = () => {
    if (collapsible && collapsed) return collapsedWidth;
    return navWidth;
  };
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Drawer
        {...props}
        className={`${className} ${classes.root}`}
        open={opened}
        onClose={() => setOpened(false)}
        variant={navVariant}
        anchor={navAnchor}
      >
        <div className={classes.container} style={{ width: getWidth() }}>
          <Box className={classes.heightAdjustment} height={`${height}px`} />
          {typeof header === 'function' ? header(ctx) : header}
          <div className={classes.content}>
            {typeof children === 'function' ? children(ctx) : children}
          </div>
          {collapsible && (
            <Button
              {...toggleProps}
              className={classes.toggleButton}
              fullWidth
              onClick={() => setCollapsed(!collapsed)}
            >
              {renderIcon && renderIcon(collapsed, setCollapsed)}
            </Button>
          )}
        </div>
      </Drawer>
      <Grow in={opened && navVariant === 'temporary' && !!renderIcon}>
        <IconButton
          className={classes.closeButton}
          style={{ left: navWidth + 16 }}
          onClick={() => setOpened(false)}
        >
          {renderIcon && renderIcon(false)}
        </IconButton>
      </Grow>
    </React.Fragment>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  renderIcon: PropTypes.func,
  toggleProps: PropTypes.shape({}),
};
Nav.defaultProps = {
  className: '',
  header: null,
  renderIcon: null,
  toggleProps: {},
};

export default Nav;
