import React from 'react';
import { StylesProvider } from './StylesContext';
import { useDefaultStyles } from './defaultStyles';

function CategoryProvider({
  children,
  useStyles = useDefaultStyles,
}: React.PropsWithChildren<{ useStyles: typeof useDefaultStyles }>) {
  const styles = useStyles();
  return <StylesProvider styles={styles}>{children}</StylesProvider>;
}

export default CategoryProvider;
