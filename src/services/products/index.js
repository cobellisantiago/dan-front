import { getRequest, postRequest, Servers } from '../common/api';

const Endpoints = {
  products: '/products'
};

export async function getProducts() {
  try {
    return await getRequest(Servers.PRODUCTS_URL, Endpoints.products);
  } catch (error) {
    throw error.response;
  }
}

export async function createProduct(body) {
  try {
    return await postRequest(Servers.PRODUCTS_URL, Endpoints.products, body);
  } catch (error) {
    throw error.response;
  }
}

export async function editProduct(id, body) {
  try {
    return await postRequest(`${Servers.PRODUCTS_URL}/${id}`, Endpoints.products, body);
  } catch (error) {
    throw error.response;
  }
}
