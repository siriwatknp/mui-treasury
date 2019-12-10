import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useLayoutCtx } from '../hooks';
import { transitionStyles } from '../styles';

const useTransitionStyles = makeStyles(transitionStyles);

const HeaderOffset = ({ className, style, ...props }) => {
  const { header } = useLayoutCtx();
  const transition = useTransitionStyles();
  const hasOffset =
    header.position === 'fixed' || header.position === 'absolute';
  return (
    <div
      {...props}
      className={cx('HeaderOffset', transition.root, className)}
      style={{
        ...style,
        height: hasOffset ? header.offsetHeight : 0,
        flexShrink: 0,
      }}
    />
  );
};

HeaderOffset.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
HeaderOffset.defaultProps = {
  className: undefined,
  style: undefined,
};

export default HeaderOffset;
