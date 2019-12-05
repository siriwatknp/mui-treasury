import React from 'react';

const WindowContext = React.createContext({
  // eslint-disable-next-line object-shorthand
  iWindow: typeof window !== 'undefined' ? window : undefined,
  iBody: typeof document !== 'undefined' ? document.body : undefined,
});

export const WindowProvider = WindowContext.Provider;
export const WindowConsumer = WindowContext.Consumer;

export default WindowContext;
