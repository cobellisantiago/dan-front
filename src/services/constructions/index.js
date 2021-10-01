import { getRequest, Servers } from '../common/api';

const Endpoints = {
  constructions: '/constructions'
};

// eslint-disable-next-line import/prefer-default-export
export async function getConstructions() {
  try {
    return await getRequest(Servers.USERS_URL, Endpoints.constructions);
  } catch (error) {
    throw error.response;
  }
}
