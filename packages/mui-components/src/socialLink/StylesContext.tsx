import React from 'react';

const defaultSocialLinkStyles = {
  anchor: '',
  icon: '',
};

const StylesContext = React.createContext<
  Partial<typeof defaultSocialLinkStyles>
>(defaultSocialLinkStyles);

export const useCtxStyles = () => React.useContext(StylesContext);

type StylesProviderProps = React.PropsWithChildren<{
  styles: Partial<typeof defaultSocialLinkStyles>;
}>;

export function StylesProvider({ styles, children }: StylesProviderProps) {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
}
