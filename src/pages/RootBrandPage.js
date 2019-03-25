/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import route from 'pages/brands/.brandRoutes';

const RootBrandPage = () => (
  <Switch>
    {route.map(({ path, Page }) => (
      <Route
        exact
        key={path}
        path={path}
        render={router => <Page {...router} />}
      />
    ))}
  </Switch>
);

export default RootBrandPage;
