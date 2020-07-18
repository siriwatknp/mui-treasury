import React from 'react';

const defaultNavMenuStyles = {
  menu: '',
  item: '',
  itemActive: '',
};

const StylesContext = React.createContext<Partial<typeof defaultNavMenuStyles>>(
  defaultNavMenuStyles
);

export const useCtxStyles = () => React.useContext(StylesContext);

export const useNavItemStyles = () => {
  const styles = useCtxStyles()
  return {
    ...styles,
    active: styles.itemActive
  }
}

type StylesProviderProps = React.PropsWithChildren<{
  styles: Partial<typeof defaultNavMenuStyles>;
}>;

export function StylesProvider({ styles, children }: StylesProviderProps) {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
}
