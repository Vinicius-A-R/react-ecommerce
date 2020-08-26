import React, { useState, useEffect } from 'react';
import { auth } from './firebase/firebase-utils';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const isLogged = async () => {
      await auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
      });
    };

    isLogged();

    return () => {
      isLogged();
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes currentUser={currentUser} />
    </>
  );
}

export default App;
