import React, { useState, useEffect } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentUser } from './redux/user/user-actions';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  const dispatch = useDispatch();

  const authUser = async () => {
    await auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: 'SET_CURRENT_USER',
            payload: {
              user: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
          });
        });
      }

      dispatch({ type: 'SET_CURRENT_USER', authUser });
    });
  };

  useEffect(() => {
    authUser();

    return () => {
      authUser();
    };
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <GlobalStyle />
      <Routes currentUser={currentUser} />
    </>
  );
}

export default App;
