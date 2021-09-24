import axios from 'axios';

const axiosClient = axios.create();

export const Servers = {
  USERS_URL: '/users/api-users',
   ORDERS_URL: '/orders/api-orders',
   PRODUCTS_URL: '/products/api-products',
   PAYMENTS_URL: '/payments/api-payments',
   SHIPMENTS_URL: '/shipments/api-shipments',
};

axiosClient.defaults.baseURL = 'http://localhost:7000';

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

// All request will wait 2 seconds before timeout
axiosClient.defaults.timeout = 2000;

export function getRequest(SERVER, URL) {
  return axiosClient.get(`${SERVER}${URL}`).then((response) => response);
}

export function postRequest(SERVER, URL, payload) {
  return axiosClient.post(`${SERVER}${URL}`, payload).then((response) => response);
}

export function putRequest(SERVER, URL, payload) {
  return axiosClient.put(`${SERVER}${URL}`, payload).then((response) => response);
}

export function deleteRequest(SERVER, URL) {
  return axiosClient.delete(`${SERVER}${URL}`).then((response) => response);
}
