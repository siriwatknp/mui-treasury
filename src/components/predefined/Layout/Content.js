import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Consumer } from './Root';

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
}) => (
  <Consumer>
    {({
      collapsed,
      collapsedWidth,
      navPermanent,
      navVariant,
      navWidth,
      // Defined Breakpoint in Root's props
      open,
      breakpoint,
      isBelowBreakpoint,
    }) => {
      const getMargin = () => {
        if (isBelowBreakpoint) {
          if (breakpoint.variant === 'persistent' && open) {
            return navWidth;
          }
          return 0;
        }
        if (navVariant === 'persistent' && open) return navWidth;
        if (isBelowBreakpoint) return 0;
        if (navPermanent && !collapsed) return navWidth;
        if (navPermanent && collapsed) return collapsedWidth;
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
    }}
  </Consumer>
);

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
