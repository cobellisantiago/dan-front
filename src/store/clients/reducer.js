import { connect } from 'react-redux';
import {
  CLEAR,
  FETCH_CLIENTS,
  FETCH_CLIENTS_ERROR,
  FETCH_CLIENT,
  FETCH_CLIENT_ERROR,
  SET_CLIENTS,
  SET_CLIENT,
  ADDING_CLIENT,
  ADDING_CLIENT_ERROR,
  ADD_CLIENT
} from './types';
import CLEAR_ALL from '../helpers/types';

const initialState = {
  client: {},
  fetchingClient: false,
  errorFetchingClient: null,
  addInProgressClient: false,
  errorAddingClient: null,
  clients: [],
  fetchingClients: false,
  errorFetchingClients: null,
};

export const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLIENT: {
      return {
        ...state,
        fetchingClient: true,
        errorFetchingClient: null
      };
    }
    case FETCH_CLIENT_ERROR: {
      return {
        ...state,
        fetchingClient: false,
        errorFetchingClient: action.error
      };
    }
    case SET_CLIENT: {
      return {
        ...state,
        fetchingClient: false,
        errorFetchingClient: null,
        client: action.client
      };
    }
    case ADDING_CLIENT: {
      return {
        ...state,
        addingClient: true,
        errorAddingClient: null
      };
    }
    case ADDING_CLIENT_ERROR: {
      return {
        ...state,
        addingClient: false,
        errorAddingClient: action.error
      };
    }
    case ADD_CLIENT: {
      return {
        ...state,
        addingClient: false,
        errorAddingClient: null,
        client: action.client
      };
    }
    case FETCH_CLIENTS: {
      return {
        ...state,
        fetchingClients: true,
        errorFetchingClients: null
      };
    }
    case FETCH_CLIENTS_ERROR: {
      return {
        ...state,
        fetchingClients: false,
        errorFetchingClients: action.error
      };
    }
    case SET_CLIENTS: {
      return {
        ...state,
        fetchingClients: false,
        errorFetchingClients: null,
        clients: action.clients
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

export default clientsReducer;
