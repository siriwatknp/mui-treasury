import React from 'react';

const defaultEmailSubscribeStyles = {
  form: '',
  input: '',
  submit: '',
};

const StylesContext = React.createContext<
  Partial<typeof defaultEmailSubscribeStyles>
>(defaultEmailSubscribeStyles);

export const useCtxStyles = () => React.useContext(StylesContext);

type StylesProviderProps = React.PropsWithChildren<{
  styles: Partial<typeof defaultEmailSubscribeStyles>;
}>;

export function StylesProvider({ styles, children }: StylesProviderProps) {
  return (
    <StylesContext.Provider value={styles}>{children}</StylesContext.Provider>
  );
}

export const StylesConsumer = StylesContext.Consumer
