import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://gratibox-deltinha.herokuapp.com';

export function postRegister(body) {
  return axios.post(`${BASE_URL}/register`, body);
}
export function postLogin(body) {
  return axios.post(`${BASE_URL}/login`, body);
}
