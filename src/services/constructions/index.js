import { getRequest, Servers } from '../common/api';

// export async function getConstructions(
//   searchParams,
//   insideArea = true,
//   limit,
//   offset
// ) {
//   try {
//
//     const result = await this.axiosInstance = axios.create({url: Endpoints.baseUrl}
//     ).request({
//       url: `${Endpoints.accounts}`,
//       method: 'post',
//       params: { insideArea, limit, offset },
//       data: searchParams,
//     });
//     return result.data;
//   } catch (error) {
//     throw error.response;
//   }
// }

const Endpoints = {
  baseUrl: 'http://localhost:8080/',
  constructions: '/constructions'
};

// eslint-disable-next-line import/prefer-default-export
export async function getConstructions() {
  try {
    console.log('Fetching constructions');
    return await getRequest(Servers.USERS_URL, Endpoints.constructions);
  } catch (error) {
    // Log errors
    throw error.response;
  }
}
