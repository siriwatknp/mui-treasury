import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LayoutContext } from './Root';

const styles = ({ breakpoints, palette, spacing, transitions }) => ({
  root: {
    borderTop: '1px solid',
    borderColor: palette.grey[200],
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

const Footer = ({
  className,
  component: Component,
  classes,
  style,
  ...props
}) => {
  const ctx = useContext(LayoutContext);
  const {
    navVariant,
    navWidth,
    collapsible,
    collapsed,
    collapsedWidth,
    footerShrink,
    open,
    navAnchor,
  } = ctx;
  const getMargin = () => {
    if (navAnchor !== 'left' || !footerShrink) return 0;
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
        ...style,
        marginLeft: getMargin(),
      }}
    />
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Footer.defaultProps = {
  className: '',
  component: 'footer',
  style: {},
};

export default withStyles(styles, { name: 'MuiFooter' })(Footer);
