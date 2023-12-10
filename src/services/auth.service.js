import { ApiEndpoints } from '../constants/api.constants';
import { AxiosInstance } from '../utils/auth.utils';

export const login = async (details) => {
  const res = await AxiosInstance.post(ApiEndpoints.login, details);
  console.log(res.data);
};

export const signUp = async (details) => {
  const res = await AxiosInstance.post(ApiEndpoints.signUp, details);
  console.log(res.data);
};
