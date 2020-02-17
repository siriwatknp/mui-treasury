import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

const Branches = ({ className, children, ...props }) => {
  const classes = useTreeStyles();
  return <ul className={cx(classes.branches, className)}>{children}</ul>;
};

Branches.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Branches.defaultProps = {
  className: undefined,
  children: null,
};

export default Branches;
