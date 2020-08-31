import UserActionTypes from './user-types';

/* export const setCurrentUser = (user) => ({
  // type: 'SET_CURRENT_USER',
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
}); */

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
