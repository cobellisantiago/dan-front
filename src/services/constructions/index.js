import {
 getRequest, Servers, postRequest, putRequest, deleteRequest
} from '../common/api';

const Endpoints = {
  constructions: '/constructions'
};

export async function getConstructions() {
  try {
    return await getRequest(Servers.USERS_URL, Endpoints.constructions);
  } catch (error) {
    throw error.response;
  }
}

export async function createConstruction(body) {
  try {
    return await postRequest(Servers.USERS_URL, Endpoints.constructions, body);
  } catch (error) {
    throw error.response;
  }
}

export async function editConstruction(id, body) {
  try {
    return await putRequest(Servers.USERS_URL, `${Endpoints.constructions}/${id}`, body);
  } catch (error) {
    throw error.response;
  }
}

export async function deleteConstruction(id) {
  try {
    return await deleteRequest(Servers.USERS_URL, `${Endpoints.constructions}/${id}`);
  } catch (error) {
    throw error.response;
  }
}
