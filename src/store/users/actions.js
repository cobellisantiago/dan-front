import {
  CLEAR,
  FETCH_USER,
  FETCH_USER_ERROR,
  SET_USER,
} from './types';

export const fetchUser = () => ({ type: FETCH_USER });

export const fetchUserError = (error) => ({ type: FETCH_USER_ERROR, error });

export const setUser = (user) => ({ type: SET_USER, user });

export const clear = () => ({ type: CLEAR });
