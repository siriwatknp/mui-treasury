import React from 'react';
import cx from 'clsx';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { useCtxStyles } from './StylesContext';

export function SubmitButton(props: ButtonBaseProps) {
  const styles = useCtxStyles();
  return (
    <ButtonBase
      focusRipple
      {...props}
      className={cx(styles.submit, props.className)}
      type="submit"
    />
  );
}
