import {
  getRequest, Servers, postRequest, putRequest,
} from '../common/api';

const Endpoints = {
  shipments: '/shipments'
};

export async function getShipments() {
  try {
    return await getRequest(Servers.SHIPMENTS_URL, Endpoints.shipments);
  } catch (error) {
    throw error.response;
  }
}

export async function createShipment(body) {
  try {
    return await postRequest(Servers.SHIPMENTS_URL, Endpoints.shipments, body);
  } catch (error) {
    throw error.response;
  }
}

export async function editShipment(id, body) {
  try {
    return await putRequest(Servers.SHIPMENTS_URL, `${Endpoints.shipments}/${id}`, body);
  } catch (error) {
    throw error.response;
  }
}
