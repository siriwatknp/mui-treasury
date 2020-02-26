import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import { useCtxStyles } from '../StylesContext';

const Action = ({ component: Component, className, ...props }) => {
  const classes = useCtxStyles();
  if (Component)
    return <Component className={cx(classes.action, className)} {...props} />;
  return (
    <SwitchToggle button className={cx(classes.action, className)} {...props} />
  );
};
Action.propTypes = {
  component: PropTypes.elementType,
  useStyles: PropTypes.func,
  className: PropTypes.string,
};

export default Action;
