import { getSpotifyTokenInstance, getSpotifyApiInstance } from 'api';
import { getRefreshToken, setRefreshToken } from 'store/Cookie';
import queryString from 'query-string';

const tokenApi = getSpotifyTokenInstance();

const apiController = (token) => {
  let validToken = token;
  const checkToken = getSpotifyApiInstance();
  const instance = getSpotifyApiInstance();

  checkToken.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  });

  checkToken.get('/me').catch((err) => {
    if (err.status === 401) {
      const option = queryString.stringify({
        grant_type: 'refresh_token',
        refresh_token: getRefreshToken(),
      });

      tokenApi.post('', option).then((res) => {
        const accessToken = res.data.access_token;
        const refreshToken = res.data.refresh_token;

        localStorage.setItem('spotify', accessToken);
        setRefreshToken(refreshToken);

        validToken = accessToken;
      });
    }
  });

  instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer ' + validToken;
    return config;
  });

  return instance;
};

export function getSpotifyToken(option, success, fail) {
  tokenApi.post('', option).then(success).catch(fail);
}

export function getSpotifyUserInfo(token) {
  const api = apiController(token);
  return api.get('/me');
}
