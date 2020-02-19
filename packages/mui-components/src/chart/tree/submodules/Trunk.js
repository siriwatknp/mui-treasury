import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

const Trunk = ({ className, children }) => {
  const classes = useTreeStyles();
  return <div className={cx(classes.trunk, className)}>{children}</div>;
};

Trunk.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Trunk.defaultProps = {
  className: undefined,
  children: null,
};

export default Trunk;
