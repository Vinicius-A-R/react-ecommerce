import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage/';
import Shop from './pages/Shop/';
import Sign from './pages/Sign/';

import Header from './components/Header/';

function routes({ currentUser }) {
  // const useCurrentUser = () => {
  //   return currentUser;
  // };

  console.log(currentUser);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <Sign />)}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default routes;
