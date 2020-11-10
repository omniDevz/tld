import axios from 'axios';

import constants from '../constants';
import storage from '../utils/storage';

export const apiViaCep = axios.create({
  baseURL: constants.URL_API_VIACEP,
});

export const apiCountries = axios.create({
  baseURL: constants.URL_API_COUNTRIES,
});

export const apiLocations = axios.create({
  baseURL: constants.URL_API_LOCATIONS,
});

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

const tokenExpired = () => {
  window.location.href = '/login?tokenExpired=true';
  storage.removeValuesJTW();
};

api.interceptors.request.use(
  (config) => {
    if (storage.hasValuesJTW()) {
      const userTokenExpiration = storage.getDateExpirationJTW();
      const today = new Date();
      if (today > userTokenExpiration) {
        tokenExpired();
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
