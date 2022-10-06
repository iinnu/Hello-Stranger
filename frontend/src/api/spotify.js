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

const getGenres = async (artistId) => {
  const token = localStorage.getItem('spotify');
  const api = apiController(token);

  return api.get(`/artists/${artistId}`).then((res) => {
    const genres = res.data.genres;
    return genres;
  });
};

// musicID, musicName, musicArtist, musicImgUrl
const getRecommendList = (list) => {
  const newList = list.map((item, index) => {
    const { album, id, name, preview_url, uri } = item;
    const music = {
      musicID: index,
      musicName: name,
      trackId: id,
      musicArtist: album.artists[0].name,
      artistId: album.artists[0].id,
      musicImgUrl: album.images[1].url,
      preview: preview_url,
      uri: uri,
    };
    return music;
  });

  return newList;
};

export function getSpotifyToken(option, success, fail) {
  tokenApi.post('', option).then(success).catch(fail);
}

export function getSpotifyUserInfo(token) {
  const api = apiController(token);
  return api.get('/me');
}

export function getMusicUris(list) {
  const token = localStorage.getItem('spotify');
  const api = apiController(token);

  const uris = Promise.all(
    list.map(async (item) => {
      const response = await api.get('/search', {
        params: {
          q: `${item.musicName} ${item.musicArtist}`,
          type: 'track',
          limit: '2',
        },
      });
      const track = response.data.tracks.items[0];

      return {
        ...item,
        uri: track.uri,
        preview: track.preview_url,
        artistId: track.artists[0].id,
        trackId: track.id,
      };
    })
  );

  return uris;
}

export async function getSpotifyRecommendation(seed) {
  const token = localStorage.getItem('spotify');
  const api = apiController(token);
  const genres = await getGenres(seed.artistId);

  const params = {
    limit: 10,
    market: 'KR',
    seed_artists: seed.artistId,
    seed_genres: genres.join(),
    seed_tracks: seed.trackId,
  };

  const response = await api.get(`/recommendations`, { params: params });

  return getRecommendList(response.data.tracks);
}

export async function createPlaylist(list, success) {
  const token = localStorage.getItem('spotify');
  const api = apiController(token);

  const info = await getSpotifyUserInfo(token);

  // 플레이리스트 생성
  const payload = {
    name: 'HS - ' + new Date().toLocaleString(),
    description: 'Hello Stranger playlist',
  };
  const playlist = await api.post(`/users/${info.data.id}/playlists`, payload);
  const playlist_id = playlist.data.id;

  // 플레이리스트에 아이템 추가
  const uris = list.map((item) => item.uri);
  api
    .post(`/playlists/${playlist_id}/tracks`, {
      uris: uris,
      position: 0,
    })
    .then(success);

  return playlist.data.id;
}
