import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Twig, useTreeStyles } from '../../tree';

const Inheritor = ({ className, hasOneSpouse, ...props }) => {
  const classes = useTreeStyles();
  return (
    <Twig
      className={cx(hasOneSpouse && classes.hasOneSpouse, className)}
      {...props}
    />
  );
};

Inheritor.propTypes = {
  className: PropTypes.string,
  hasOneSpouse: PropTypes.bool,
};
Inheritor.defaultProps = {
  className: undefined,
  hasOneSpouse: false,
};

export default Inheritor;
