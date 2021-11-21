import axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://gratibox-deltinha.herokuapp.com';

export function getSubscription(headers) {
  return axios.get(`${BASE_URL}/user`, headers);
}

export function getPlans() {
  return axios.get(`${BASE_URL}/plans`);
}

export function getProducts() {
  return axios.get(`${BASE_URL}/products`);
}

export function getStates() {
  return axios.get(`${BASE_URL}/states`);
}

export function postSubscription({ headers, body }) {
  return axios.post(`${BASE_URL}/subscription`, body, headers);
}
