import { postRequest, Servers, getRequest } from '../common/api';

const Endpoints = {
  payments: '/payments'
};

export async function getPayments() {
  try {
    return await getRequest(Servers.PAYMENTS_URL, Endpoints.payments);
  } catch (error) {
    throw error.response;
  }
}

export async function createPayment(body) {
  try {
    return await postRequest(Servers.PAYMENTS_URL, Endpoints.payments, body);
  } catch (error) {
    throw error.response;
  }
}
