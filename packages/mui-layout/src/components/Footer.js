import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import useConfig from '../hooks/useConfig';

const useStyles = makeStyles(
  ({ breakpoints, palette, spacing, transitions }) => ({
    root: {
      borderTop: '1px solid',
      borderColor: palette.grey[200],
      padding: spacing(2),
      [breakpoints.up('sm')]: {
        padding: spacing(3),
      },
      transition: transitions.create(['margin'], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.leavingScreen,
      }),
    },
  }),
);

const Footer = ({ className, component: Component, style, ...props }) => {
  const ctx = useConfig();
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
  const classes = useStyles(props);
  return (
    <Component
      {...props}
      className={`${classes.root} ${className}`}
      style={{
        ...style,
        marginLeft: getMargin(),
      }}
    />
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Footer.defaultProps = {
  className: '',
  component: 'footer',
  style: {},
};

export default Footer;
