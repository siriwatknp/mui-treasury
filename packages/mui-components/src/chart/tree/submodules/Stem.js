import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

const Stem = ({ className, children }) => {
  const classes = useTreeStyles();
  return <div className={cx(classes.stem, className)}>{children}</div>;
};

Stem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Stem.defaultProps = {
  className: undefined,
  children: null,
};

export default Stem;
