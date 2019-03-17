/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeController } from 'components/organisms';
import ButtonPage from 'pages/components/ButtonPage';
import CardPage from 'pages/components/CardPage';
import TabsPage from 'pages/components/TabsPage';
import InputPage from 'pages/components/InputPage';
import TextFieldPage from 'pages/components/TextFieldPage';

const RootComponentPage = () => (
  <ThemeController>
    {props => (
      <Switch>
        <Route
          exact
          path={'/components/button'}
          render={router => <ButtonPage {...router} {...props} />}
        />
        <Route
          exact
          path={'/components/card'}
          render={router => <CardPage {...router} {...props} />}
        />
        <Route
          exact
          path={'/components/tabs'}
          render={router => <TabsPage {...router} {...props} />}
        />
        <Route
          exact
          path={'/components/inputs'}
          render={router => <InputPage {...router} {...props} />}
        />
        <Route
          exact
          path={'/components/text-fields'}
          render={router => <TextFieldPage {...router} {...props} />}
        />
      </Switch>
    )}
  </ThemeController>
);

export default RootComponentPage;
