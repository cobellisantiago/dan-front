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

export const fetchClient = () => ({ type: FETCH_CLIENT });

export const fetchClientError = (error) => ({ type: FETCH_CLIENT_ERROR, error });

export const setClient = (client) => ({ type: SET_CLIENT, client });

export const addingClient = () => ({ type: ADDING_CLIENT });

export const addingClientError = (error) => ({ type: ADDING_CLIENT_ERROR, error });

export const addClient = (client) => ({ type: ADD_CLIENT, client });

export const fetchClients = () => ({ type: FETCH_CLIENTS });

export const fetchClientsError = (error) => ({ type: FETCH_CLIENTS_ERROR, error });

export const setClients = (clients) => ({ type: SET_CLIENTS, clients });

export const clear = () => ({ type: CLEAR });
