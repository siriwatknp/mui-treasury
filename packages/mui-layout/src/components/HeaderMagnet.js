import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { transitionStyles } from '../styles';

const useTransitionStyles = makeStyles(transitionStyles);

const HeaderMagnet = ({ className, style, ...props }) => {
  const transition = useTransitionStyles();
  return (
    <div
      className={cx('HeaderMagnet', transition.smooth, className)}
      style={{ ...style, flexShrink: 0 }}
      {...props}
    />
  );
};

HeaderMagnet.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
HeaderMagnet.defaultProps = {
  className: undefined,
  style: undefined,
};

export default HeaderMagnet;
