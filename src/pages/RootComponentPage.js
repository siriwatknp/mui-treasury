/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeController } from 'components/organisms';
import route from 'pages/components/.routes';

const RootComponentPage = () => (
  <ThemeController>
    {props => (
      <Switch>
        {route.map(({ path, Page }) => (
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
