import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import useConfig from '../hooks/useConfig';

const getMargin = ({
  navAnchor,
  navVariant,
  navWidth,
  collapsible,
  collapsed,
  collapsedWidth,
  opened,
}) => {
  if (navAnchor !== 'left') return 0;
  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    return navWidth;
  }
  if (navVariant === 'permanent') {
    if (collapsible) {
      if (collapsed) return collapsedWidth;
      return navWidth;
    }
    return navWidth;
  }
  return 0;
};
const getWidth = ({ opened, navVariant, squeezed }) => {
  if (navVariant === 'persistent' && opened) {
    // open is effect only when
    // navVariant === 'persistent' ||
    // navVariant === 'temporary'
    if (squeezed) {
      return 'auto';
    }
    return '100%';
  }
  return 'auto';
};
const getHeight = ({ headerPosition, initialAdjustmentHeight }) => {
  if (headerPosition === 'fixed' || headerPosition === 'absolute')
    return initialAdjustmentHeight;
  return 0;
};

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    flexGrow: 1,
    transition: transitions.create(['margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
}));

const Content = ({
  component: Component,
  className,
  children,
  style,
  ...props
}) => {
  const ctx = useConfig();
  const classes = useStyles(props);
  return (
    <>
      <Box height={getHeight(ctx)} />
      <Component
        {...props}
        className={`${classes.root} ${className}`}
        style={{
          ...style,
          marginLeft: getMargin(ctx),
          width: getWidth(ctx),
        }}
      >
        {typeof children === 'function' ? children(ctx) : children}
      </Component>
    </>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Content.defaultProps = {
  className: '',
  component: 'main',
  style: {},
};

export default Content;
