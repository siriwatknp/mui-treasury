import React from 'react';
import PropTypes from 'prop-types';
import SwitchToggle from '@mui-treasury/components/toggle/switch';
import { useCtxStyles } from '../StylesContext';

const Action = ({
  component: Component,
  useStyles = useCtxStyles,
  ...props
}) => {
  const classes = useStyles(props);
  const useOverrideStyles = () => ({
    root: classes.action,
    toggled: classes.actionToggled,
    button: classes.actionButton,
  });
  if (Component) return <Component useStyles={useOverrideStyles} {...props} />;
  return <SwitchToggle button useStyles={useOverrideStyles} {...props} />;
};
Action.propTypes = {
  component: PropTypes.elementType,
  useStyles: PropTypes.func,
};

export default Action;
