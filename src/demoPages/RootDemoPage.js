import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Amigo from './Amigo';

const RootDemoPage = () => (
  <>
    <Switch>
      <Route exact path={'/demo-pages/amigo-e-commerce'} component={Amigo} />
    </Switch>
  </>
);

RootDemoPage.propTypes = {};
RootDemoPage.defaultProps = {};

export default RootDemoPage;
