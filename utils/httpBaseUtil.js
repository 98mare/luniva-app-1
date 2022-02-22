import { BASE_URL } from '../constants/url'
import axois from 'axios';

export const httpBase = () => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  }
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    mode: 'no-cors',
  })
  instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return error;
    }
  );

  return instance;
}