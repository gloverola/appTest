import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';

let headers = {};

// Create an Instance
const axiosInstance = axios.create({
  baseURL: envs.DEV_URL,
  headers,
});

// Intercept requests
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
