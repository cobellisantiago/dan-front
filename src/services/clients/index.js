import { postRequest, Servers, getRequest } from '../common/api';

const Endpoints = {
  clients: '/clients'
};

export async function addClient(body) {
  try {
    return await postRequest(Servers.USERS_URL, Endpoints.clients, body);
  } catch (error) {
    throw error.response;
  }
}

export async function getClients() {
  try {
    return await getRequest(Servers.USERS_URL, Endpoints.clients);
  } catch (error) {
    throw error.response;
  }
}
