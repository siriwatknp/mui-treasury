import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Branches, useTreeStyles } from '../../tree';

const Children2 = ({ className, stretch, ...props }) => {
  const classes = useTreeStyles();
  return (
    <Branches
      className={cx(stretch && classes.stretch, className)}
      {...props}
    />
  );
};

Children2.propTypes = {
  className: PropTypes.string,
  stretch: PropTypes.bool,
};
Children2.defaultProps = {
  className: undefined,
  stretch: false,
};

export default Children2;
