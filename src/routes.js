import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/';
import Shop from './pages/Shop/';
import Sign from './pages/Sign/';
import Checkout from './pages/Checkout/';

import Header from './components/Header/';

function routes({ currentUser }) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
        <Route
          exact
          path="/checkout"
          component={Checkout}
          currentUser={currentUser}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
