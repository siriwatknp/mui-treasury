import React from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
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
