import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../layoutContext';
import transitionStyles from '../styles/transition.styles';

const useStyles = makeStyles(
  ({ breakpoints, palette, spacing, transitions }) => ({
    root: {
      borderTop: '1px solid',
      borderColor: palette.grey[200],
      padding: spacing(2),
      [breakpoints.up('sm')]: {
        padding: spacing(3),
      },
      ...transitionStyles({ transitions }).root,
    },
  })
);

const Footer = ({ className, component: Component, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { getSidebarGap, getWidth, footer } = ctx;
  const classes = useStyles(props);
  return (
    <Component
      {...props}
      className={`${classes.root} ${className}`}
      style={{
        ...style,
        marginLeft: getSidebarGap(footer),
        width: getWidth(footer),
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
  className: undefined,
  component: 'footer',
  style: undefined,
};

export default Footer;
