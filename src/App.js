import React, { useState, useEffect, useMemo } from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';

import { useSelector, useDispatch } from 'react-redux';

import Routes from './routes';

function App() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [userId, setUserId] = useState('');

  const user = useMemo(() => currentUser, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  //function like componentdidmount and componentwillunmount
  useEffect(() => {
    let hasUser = async () => {
      await auth.onAuthStateChanged(async (authUser) => {
        if (authUser) {
          const userRef = await createUserProfileDocument(authUser);

          return userRef.onSnapshot((snapShot) => {
            dispatch({
              type: 'SET_CURRENT_USER',
              payload: {
                user: {
                  id: snapShot.id,
                  ...snapShot.data(),
                },
              },
            });

            setUserId(snapShot.id);
          });
        }

        dispatch({ type: 'SET_CURRENT_USER', authUser });
      });
    };

    hasUser();
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Routes currentUser={user} />
    </>
  );
}

export default App;
