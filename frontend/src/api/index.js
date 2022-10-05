import axios from 'axios';
import { Buffer } from 'buffer';

// 서버 요청 api
function getApiInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
      'Content-type': 'application/json',
    },
  });

  // 토큰이 있으면 헤더에 토큰 설정
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  });

  return instance;
}

// 스포티파이 토큰 발급 api
function getSpotifyTokenInstance() {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

  const instance = axios.create({
    baseURL: 'https://accounts.spotify.com/api/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + auth,
    },
  });

  return instance;
}

// 스포티파이 api
function getSpotifyApiInstance() {
  const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
      'content-type': 'application/json',
    },
  });

  return instance;
}

export { getApiInstance, getSpotifyTokenInstance, getSpotifyApiInstance };
