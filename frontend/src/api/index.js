import axios from 'axios';

function getApiInstance() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST,
    headers: {
      'Content-type': 'application/json',
    },
  });
  return instance;
}

export { getApiInstance };
