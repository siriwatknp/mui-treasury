import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useLayoutCtx } from '../layoutContext';
import { useTransitionStyles } from '../styles';

const HeaderOffset = ({ className, style, ...props }) => {
  const { header } = useLayoutCtx();
  const transitionStyles = useTransitionStyles();
  const hasOffset =
    header.position === 'fixed' || header.position === 'absolute';
  return (
    <div
      {...props}
      className={cx('HeaderOffset', transitionStyles.root, className)}
      style={{
        ...style,
        height: hasOffset ? header.offsetHeight : 0,
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
