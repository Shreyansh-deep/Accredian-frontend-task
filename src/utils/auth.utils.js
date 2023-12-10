import axios from 'axios';
import { API_BASE_URL } from '../constants/api.constants';

export const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
