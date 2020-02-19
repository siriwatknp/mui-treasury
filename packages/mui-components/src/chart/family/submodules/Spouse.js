import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { useTreeStyles } from '../../tree';

const Spouse = ({ hasChildren, children }) => {
  const classes = useTreeStyles();
  return (
    <div
      className={cx(classes.spouse, hasChildren && classes.spouseWithChildren)}
    >
      {children}
    </div>
  );
};

Spouse.propTypes = {
  hasChildren: PropTypes.bool,
  children: PropTypes.node,
};
Spouse.defaultProps = {
  hasChildren: false,
  children: null,
};

export default Spouse;
