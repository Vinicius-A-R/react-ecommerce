import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/';

const HatsPage = () => (
  <div>
    <h1>HATS</h1>
  </div>
);

function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
