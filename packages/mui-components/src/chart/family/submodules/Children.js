import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { Branches, useTreeStyles } from '../../tree';

const Children = ({ className, stretch, ...props }) => {
  const classes = useTreeStyles();
  return (
    <Branches
      className={cx(stretch && classes.stretch, className)}
      {...props}
    />
  );
};

Children.propTypes = {
  className: PropTypes.string,
  stretch: PropTypes.bool,
};
Children.defaultProps = {
  className: undefined,
  stretch: false,
};

export default Children;
