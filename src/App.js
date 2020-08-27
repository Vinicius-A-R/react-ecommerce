import React, { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const authUser = async () => {
    await auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(authUser);
    });
  };

  useEffect(() => {
    authUser();

    return () => {
      authUser();
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
