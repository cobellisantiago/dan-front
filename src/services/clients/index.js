import { postRequest, Servers } from '../common/api';

const Endpoints = {
  baseUrl: 'http://localhost:8080/',
  clients: '/clients'
};

// eslint-disable-next-line import/prefer-default-export
export async function addClient(body) {
  try {
    return await postRequest(Servers.USERS_URL, Endpoints.clients, body);
  } catch (error) {
    // Log errors
    throw error.response;
  }
}
