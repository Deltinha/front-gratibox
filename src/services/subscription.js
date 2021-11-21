import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://gratibox-deltinha.herokuapp.com';

export function getSubscription(headers) {
  return axios.get(`${BASE_URL}/user`, headers);
}
