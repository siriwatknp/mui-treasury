import React from 'react';

const defaultCategoryMenuStyles = {
  title: '',
  item: '',
  itemActive: '',
};

const StylesContext = React.createContext<
  Partial<typeof defaultCategoryMenuStyles>
>(defaultCategoryMenuStyles);

export const useCtxStyles = () => React.useContext(StylesContext);

export const useCategoryItemStyles = () => {
  const styles = useCtxStyles();
  return {
    ...styles,
    active: styles.itemActive,
  };
};

type StylesProviderProps = React.PropsWithChildren<{
  styles: Partial<typeof defaultCategoryMenuStyles>;
}>;

export function StylesProvider({ styles, children }: StylesProviderProps) {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
}
