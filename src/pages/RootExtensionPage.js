import React from 'react';
import { Route, Switch } from 'react-router-dom';
import route from 'pages/extensions/.extensionRoutes';

const RootExtensionPage = () => (
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

export default RootExtensionPage;
