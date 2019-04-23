import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LayoutContext } from './Root';

const styles = ({ breakpoints, spacing, transitions }) => ({
  root: {
    flexGrow: 1,
    padding: spacing.unit * 2,
    [breakpoints.up('sm')]: {
      padding: spacing.unit * 3,
    },
    transition: transitions.create(['margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
});

const Content = ({
  className,
  component: Component,
  classes,
  style,
  zeroPadding,
  ...props
}) => {
  const ctx = useContext(LayoutContext);
  const {
    navVariant,
    navWidth,
    collapsible,
    collapsed,
    collapsedWidth,
    open,
    navAnchor,
  } = ctx;
  const getMargin = () => {
    if (navAnchor !== 'left') return 0;
    if (navVariant === 'persistent' && open) {
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
  return (
    <Component
      {...props}
      className={`${className} ${classes.root}`}
      style={{
        ...(zeroPadding && { padding: 0 }),
        ...style,
        marginLeft: getMargin(),
      }}
    />
  );
};

Content.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
  zeroPadding: PropTypes.bool,
};
Content.defaultProps = {
  className: '',
  component: 'main',
  style: {},
  zeroPadding: false,
};

export default withStyles(styles, { name: 'MuiContent' })(Content);
