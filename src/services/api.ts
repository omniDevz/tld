import axios from 'axios';

import config from '../config';
import storage from '../utils/storage';

export const apiViaCep = axios.create({
  baseURL: config.URL_API_VIACEP,
});

export const apiCountries = axios.create({
  baseURL: config.URL_API_COUNTRIES,
});

export const apiLocations = axios.create({
  baseURL: config.URL_API_LOCATIONS,
});

const api = axios.create({
  baseURL: config.URL_BACKEND,
});

const tokenExpired = () => {
  window.location.href = '/login?tokenExpired=true';
  storage.removeValuesJTW();
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      tokenExpired();
    } else {
      return Promise.reject(error);
    }
  }
);

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
