import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../TreeContext';

const Twig = ({ className, children }) => {
  const classes = useTreeStyles();
  return <li className={cx(classes.twig, className)}>{children}</li>;
};

Twig.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Twig.defaultProps = {
  className: undefined,
  children: null,
};

export default Twig;
