import { getSpotifyInstance } from 'api';
import queryString from 'query-string';

const api = getSpotifyInstance();

function getSpotifyToken(option, success, fail) {
  const url = 'https://accounts.spotify.com/api/token';

  api.post(url, option).then(success).catch(fail);
}

function getSpotifyRefreshedToken(success, fail) {
  const url = 'https://accounts.spotify.com/api/token';
  const option = queryString.stringify({
    grant_type: 'refresh_token',
    refresh_token: localStorage.getItem('refresh_token'),
  });

  api.post(url, option).then(success).catch(fail);
}

export { getSpotifyToken, getSpotifyRefreshedToken };
