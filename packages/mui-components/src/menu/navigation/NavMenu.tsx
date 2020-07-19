import React from 'react';
import cx from 'clsx';
import { StylesProvider } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';

type NavMenuProps = {
  gutter?: string | number;
  direction?: 'row' | 'column';
  useStyles?: typeof useDefaultStyles;
};

function NavMenu({
  children,
  gutter,
  useStyles = useDefaultStyles,
  className,
  ...props
}: React.PropsWithChildren<NavMenuProps & JSX.IntrinsicElements['div']>) {
  const styles = useStyles({ gutter });
  return (
    <StylesProvider styles={styles}>
      <div className={cx(styles.menu, className)} {...props}>
        {children}
      </div>
    </StylesProvider>
  );
}

export default NavMenu;
