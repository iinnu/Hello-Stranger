import axios from 'axios';
import { Buffer } from 'buffer';

function getApiInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return instance;
}

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
