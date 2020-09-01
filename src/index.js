import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './styles/global';

import { Provider } from 'react-redux';

import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
