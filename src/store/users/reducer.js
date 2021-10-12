import { connect } from 'react-redux';
import {
  CLEAR,
  FETCH_USER,
  FETCH_USER_ERROR,
  SET_USER
} from './types';
import CLEAR_ALL from '../helpers/types';

const initialState = {
  user: {},
  fetchingUser: false,
  errorFetchingUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        fetchingUser: true,
        errorFetchingUser: null
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        fetchingUser: false,
        errorFetchingUser: action.error
      };
    }
    case SET_USER: {
      return {
        ...state,
        fetchingUser: false,
        errorFetchingUser: null,
        user: action.user
      };
    }
    case CLEAR: {
      return initialState;
    }
    case CLEAR_ALL: {
      return initialState;
    }
    default:
      return state;
  }
};

export default userReducer;
