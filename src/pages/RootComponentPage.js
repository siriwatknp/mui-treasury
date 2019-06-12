/* eslint-disable */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeController } from 'components/organisms';
import route from 'pages/components/.routes';

const flatten = (data, callback) => {
  if (!data.children) return [data];
  return [data, ...callback(data.children)];
};

const normalize = array =>
  array.reduce(
    (result, current) => [...result, ...flatten(current, normalize)],
    [],
  );

const normalizedRoute = normalize(route);

const RootComponentPage = ({ location }) => (
  <ThemeController formHidden={location.pathname === '/components/layout'}>
    {props => (
      <Switch>
        {normalizedRoute.map(({ path, Page }) => (
          <Route
            exact
            key={path}
            path={path}
            render={router => <Page {...router} {...props} />}
          />
        ))}
      </Switch>
    )}
  </ThemeController>
);

export default RootComponentPage;
