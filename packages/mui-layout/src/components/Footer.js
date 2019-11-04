import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../layoutContext';
import { useTransitionStyles } from '../styles';

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  root: {
    borderTop: '1px solid',
    borderColor: palette.grey[200],
    padding: spacing(2),
    [breakpoints.up('sm')]: {
      padding: spacing(3),
    },
  },
}));

const Footer = ({ className, component: Component, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { getSidebarGap, getWidth, footer } = ctx;
  const styles = useStyles(props);
  const transitionStyles = useTransitionStyles();
  return (
    <Component
      {...props}
      className={cx(styles.root, transitionStyles.root, className)}
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
