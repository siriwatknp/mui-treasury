import React from 'react';
import cx from 'clsx';
import { StylesProvider, StylesConsumer } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';

export type EmailSubscribeProps = {
  onSubmit: (email: string) => void;
  useStyles?: typeof useDefaultStyles;
  inputClearedAfterSubmit?: boolean;
} & JSX.IntrinsicElements['form'];

export function EmailSubscribe({
  onSubmit,
  children,
  className,
  useStyles = useDefaultStyles,
  inputClearedAfterSubmit,
  ...props
}: React.PropsWithChildren<EmailSubscribeProps>) {
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & { email: { value: string } };
    if (onSubmit) {
      onSubmit(target.email.value);
      if (inputClearedAfterSubmit) {
        target.email.value = '';
      }
    }
  }
  const styles = useStyles();
  return (
    <StylesProvider styles={styles}>
      <StylesConsumer>
        {styles => (
          <form
            onSubmit={handleSubmit}
            {...props}
            className={cx(styles.form, className)}
          >
            {children}
          </form>
        )}
      </StylesConsumer>
    </StylesProvider>
  );
}
