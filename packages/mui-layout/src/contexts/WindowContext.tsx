import React from 'react';

const WindowContext = React.createContext({
  // eslint-disable-next-line object-shorthand
  iWindow: typeof window !== 'undefined' ? window : undefined,
  iDocument: typeof document !== 'undefined' ? document : undefined,
});

export const WindowProvider = WindowContext.Provider;
export const WindowConsumer = WindowContext.Consumer;
export const useWindowCtx = () => React.useContext(WindowContext)

export default WindowContext;
