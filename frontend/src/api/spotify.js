import { getSpotifyTokenInstance, getSpotifyApiInstance } from 'api';
import queryString from 'query-string';

const tokenApi = getSpotifyTokenInstance();
const apiController = (token) => {
  const instance = getSpotifyApiInstance();
  instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  });
  return instance;
};

export function getSpotifyToken(option, success, fail) {
  tokenApi.post('', option).then(success).catch(fail);
}

export function getSpotifyRefreshedToken(success, fail) {
  const option = queryString.stringify({
    grant_type: 'refresh_token',
    refresh_token: localStorage.getItem('refresh_token'),
  });

  tokenApi.post('', option).then(success).catch(fail);
}

export function getSpotifyUserInfo(token) {
  const api = apiController(token);
  return api.get('/me');
}
