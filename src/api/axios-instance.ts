import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8080/api/v1',
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('token')) {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    return config;
  },
  function (error) {
    throw error;
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (response?.data) return response.data;
    return response;
  },
  function (error) {
    throw error;
  },
);

export default axiosInstance;
