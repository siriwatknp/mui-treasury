import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import merge from 'lodash/merge';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import treasuryTheme from 'theme/treasury';
import Typography from 'components/predefined/Typography';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = Component => {
  ReactDOM.render(
    <ThemeProvider
      theme={merge(treasuryTheme, {
        overrides: {
          ...Typography.getTheme(treasuryTheme),
        },
      })}
    >
      <Router>
        <Component />
      </Router>
    </ThemeProvider>,
    document.getElementById('root'),
  );
};

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
