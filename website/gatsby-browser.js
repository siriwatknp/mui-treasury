import React from 'react';
import App from './src/App';
import RouterContext from './src/contexts/router';

export const wrapPageElement = ({ element, props }) => {
  return (
    <RouterContext.Provider
      value={{ navigate: props.navigate, location: props.location }}
    >
      <App {...props}>{element}</App>
    </RouterContext.Provider>
  );
};
