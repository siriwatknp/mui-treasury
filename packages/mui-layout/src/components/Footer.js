import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx, useInsetBreakpoint } from '../hooks';
import { transitionStyles } from '../styles';
import createFooter from '../models/footer';
import upperFirst from '../utils/upperFirst';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  root: {
    borderTop: '1px solid',
    borderColor: palette.grey[200],
    padding: spacing(2),
    flex: 'auto',
    [breakpoints.up('sm')]: {
      padding: spacing(3),
    },
  },
}));

const useTransitionStyles = makeStyles(transitionStyles);

const Footer = ({ className, component: Component, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { sidebar, secondarySidebar } = ctx;
  const footerModel = createFooter(ctx);
  const { isTargetDown, insetHiddenDisabled } = useInsetBreakpoint(ctx);
  const styles = useStyles(props);
  const transition = useTransitionStyles();
  const footerStyle = footerModel.getStyle();
  if (isTargetDown && !insetHiddenDisabled) {
    if (sidebar.inset) {
      delete footerStyle[`margin${upperFirst(sidebar.anchor)}`];
    }
    if (secondarySidebar.inset) {
      delete footerStyle[`margin${upperFirst(secondarySidebar.anchor)}`];
    }
  }
  return (
    <Component
      {...props}
      className={cx(styles.root, transition.root, className)}
      style={{
        ...style,
        ...footerStyle,
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
