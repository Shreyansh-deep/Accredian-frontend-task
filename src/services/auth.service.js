import { ApiEndpoints } from '../constants/api.constants';
import { AxiosInstance } from '../utils/auth.utils';

export const login = async (details) => {
  try {
    await AxiosInstance.post(ApiEndpoints.login, details);
    return { success: true, error: null };
  } catch (error) {
    const { status, data } = error.response;
    if (status.toString().startsWith('5')) {
      return {
        success: false,
        error: { status, message: 'Something went wrong' },
      };
    }
    return { success: false, error: { status, message: data.message } };
  }
};

export const signUp = async (details) => {
  try {
    await AxiosInstance.post(ApiEndpoints.signUp, details);
    return { success: true, error: null };
  } catch (error) {
    const { status, data } = error.response;
    if (status.toString().startsWith('5')) {
      return {
        success: false,
        error: { status, message: 'Something went wrong' },
      };
    }
    return { success: false, error: { status, message: data.message } };
  }
};
