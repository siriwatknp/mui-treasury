import React, { forwardRef } from 'react';
import cx from 'clsx';
import { useCtxStyles } from './StylesContext';

export type EmailTextInputProps = JSX.IntrinsicElements['input'];

export const EmailTextInput = forwardRef<HTMLInputElement, EmailTextInputProps>(
  (props, ref) => {
    const styles = useCtxStyles();
    return (
      <input
        placeholder="Type your email"
        {...props}
        className={cx(styles.input, props.className)}
        ref={ref}
        type="email"
        name="email"
        required
      />
    );
  }
);
