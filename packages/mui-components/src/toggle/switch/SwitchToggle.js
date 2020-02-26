import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import styles from './switchToggle.styles';

const useDefaultStyles = makeStyles(styles, { name: 'SwitchToggle' });

const SwitchToggle = ({
  className,
  button,
  toggled,
  children,
  useStyles,
  classes,
  ...props
}) => {
  const result = useStyles({ classes, ...props });
  const cls = cx(result.root, toggled && result.toggled, className);
  const getChildren = () => {
    if (children) {
      return children;
    }
    return toggled ? <KeyboardArrowUp /> : <KeyboardArrowDown />;
  };
  if (!button) {
    return (
      <div className={cls} {...props}>
        {getChildren()}
      </div>
    );
  }
  return (
    <ButtonBase className={cls} focusRipple {...props}>
      {getChildren()}
    </ButtonBase>
  );
};

SwitchToggle.propTypes = {
  className: PropTypes.string,
  button: PropTypes.bool,
  classes: PropTypes.shape({
    root: PropTypes.string,
    toggled: PropTypes.string,
  }),
  toggled: PropTypes.bool,
  children: PropTypes.node,
  useStyles: PropTypes.func,
};
SwitchToggle.defaultProps = {
  className: undefined,
  button: false,
  classes: undefined,
  toggled: false,
  children: undefined,
  useStyles: useDefaultStyles,
};

export default SwitchToggle;
