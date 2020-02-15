import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import InputBase from '@material-ui/core/InputBase';
import { useBirthday, useNextFocus } from '../BirthdayContext';

export default ({
  displayName,
  useStyles,
  fieldName,
  maxLength,
  updaterName,
  customOnBlur,
}) => {
  const InputComponent = ({
    component: Component,
    classes,
    className,
    inputProps,
    name,
    nextFocus,
    onChange,
    onFocus,
    onBlur,
    zeroPrefixDisabled,
    ...props
  }) => {
    const styles = useStyles();
    const { [fieldName]: state, [updaterName]: updater } = useBirthday();
    const setFocused = useNextFocus(state.length === maxLength, nextFocus);
    return (
      <Component
        type={'tel'}
        inputProps={{ maxLength, name, ...inputProps }}
        {...props}
        className={cx(styles.root, className)}
        classes={classes}
        value={state}
        onChange={e => {
          updater(e.target.value);
          return onChange?.(e);
        }}
        onFocus={e => {
          setFocused(true);
          return onFocus?.(e);
        }}
        onBlur={e => {
          setFocused(false);
          // eslint-disable-next-line no-unused-expressions
          customOnBlur?.(e, { zeroPrefixDisabled, updater });
          return onBlur?.(e);
        }}
      />
    );
  };
  InputComponent.displayName = displayName;
  InputComponent.propTypes = {
    component: PropTypes.elementType,
    classes: PropTypes.shape({}),
    className: PropTypes.string,
    inputProps: PropTypes.shape({}),
    zeroPrefixDisabled: PropTypes.bool,
    name: PropTypes.string,
    nextFocus: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };
  InputComponent.defaultProps = {
    component: InputBase,
    classes: undefined,
    className: undefined,
    inputProps: undefined,
    name: undefined,
    zeroPrefixDisabled: false,
    nextFocus: undefined,
    onChange: undefined,
    onFocus: undefined,
    onBlur: undefined,
  };
  return InputComponent;
};
