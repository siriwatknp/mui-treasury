import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';

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

const useTransitionStyles = makeStyles(transitionStyles);

const Footer = ({ className, component: Component, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { getFooterStyle } = ctx;
  const styles = useStyles(props);
  const transition = useTransitionStyles();
  return (
    <Component
      {...props}
      className={cx(styles.root, transition.root, className)}
      style={{
        ...style,
        ...getFooterStyle(),
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
