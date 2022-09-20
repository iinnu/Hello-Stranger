import { getSpotifyInstance } from 'api';

const api = getSpotifyInstance();

function getSpotifyToken(success, fail) {
  const url = 'https://accounts.spotify.com/api/token';
  const grant_type = 'grant_type=client_credentials';

  api.post(url, grant_type).then(success).catch(fail);
}

export { getSpotifyToken };
