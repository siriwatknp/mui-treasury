import React from 'react';
import ReactDOM from 'react-dom';
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

// todo: find a better solution, will hit performance issue with React17
// https://github.com/gatsbyjs/gatsby/discussions/17914
export function replaceHydrateFunction() {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback)
  }
}
