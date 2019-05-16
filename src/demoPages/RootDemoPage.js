import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HandleBar from './HandleBar';
import Amigo from './Amigo';

const RootDemoPage = () => (
  <>
    <HandleBar />
    <Switch>
      <Route exact path={'/demo-pages/amigo-e-commerce'} component={Amigo} />
    </Switch>
  </>
);

RootDemoPage.propTypes = {};
RootDemoPage.defaultProps = {};

export default RootDemoPage;
