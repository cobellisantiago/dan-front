import {
  getRequest, postRequest, putRequest, Servers, deleteRequest
} from '../common/api';

const Endpoints = {
  orders: '/orders'
};

export async function getOrders() {
  try {
    return await getRequest(Servers.ORDERS_URL, Endpoints.orders);
  } catch (error) {
    throw error.response;
  }
}

export async function createOrder(body) {
  try {
    return await postRequest(Servers.ORDERS_URL, Endpoints.orders, body);
  } catch (error) {
    throw error.response;
  }
}

export async function editOrder(id, body) {
  try {
    return await putRequest(Servers.ORDERS_URL, `${Endpoints.orders}/${id}`, body);
  } catch (error) {
    throw error.response;
  }
}

export async function deleteOrder(id) {
  try {
    return await deleteRequest(Servers.ORDERS_URL, `${Endpoints.orders}/${id}`);
  } catch (error) {
    throw error.response;
  }
}
