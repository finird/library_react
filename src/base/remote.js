import axios from 'axios';

let AUTH_TOKEN = '';

export const BASE_URL = 'http://localhost:9000/' ;
export const remote = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': 'Bearer ' + AUTH_TOKEN
  },
  timeout: 3000,
  timeoutErrorMessage: 'Kết nối thất bại'
});


export function setToken(token) { AUTH_TOKEN = token; }

export function getToken() { return AUTH_TOKEN; }