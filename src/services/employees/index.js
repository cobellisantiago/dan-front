import { getRequest, Servers } from '../common/api';

const Endpoints = {
  employees: '/employees'
};

// eslint-disable-next-line import/prefer-default-export
export async function getEmployees() {
  try {
    return await getRequest(Servers.USERS_URL, Endpoints.employees);
  } catch (error) {
    throw error.response;
  }
}
