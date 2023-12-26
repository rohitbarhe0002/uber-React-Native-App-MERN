import  getUserToken  from '../../utils';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.98.50:8000/api',
});

const errorHandler = async (error) => {
  const statusCode = error.response?.status;
  if (statusCode) {
    const errorMessage = error.response?.data?.message || "An error occurred";
    if (statusCode === 401) {
      const userToken = await getUserToken();
      if (userToken) {
        api.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
        return api(error.config);
      }
    }
  }

  return Promise.reject(error);
};

api.interceptors.response.use(
  undefined,
  error => errorHandler(error)
);
