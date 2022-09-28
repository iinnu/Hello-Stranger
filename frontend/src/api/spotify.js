import { getSpotifyInstance } from 'api';

const api = getSpotifyInstance();

function getSpotifyToken(option, success, fail) {
  const url = 'https://accounts.spotify.com/api/token';

  api.post(url, option).then(success).catch(fail);
}

function getSpotifyRefreshedToken(option, success, fail) {
  const url = 'http://accounts.spotify.com/api/token';

  api.post(url, option).then(success).catch(fail);
}

export { getSpotifyToken, getSpotifyRefreshedToken };
