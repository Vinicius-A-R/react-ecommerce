import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/';
import Shop from './pages/Shop/';
import Sign from './pages/Sign/';

import Header from './components/Header/';

function routes({ currentUser }) {
  return (
    <BrowserRouter>
      <Header user={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={Sign} />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
