import { getSpotifyToken } from 'api/spotify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export default function SpotifyRedirectHandler() {
  const navigate = useNavigate();
  const param = new URLSearchParams(window.location.search);
  const option = queryString.stringify({
    code: param.get('code'),
    grant_type: 'authorization_code',
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
  });

  useEffect(() => {
    getSpotifyToken(
      option,
      (res) => {
        const access_token = res.data.access_token;
        const refresh_token = res.data.refresh_token;
        localStorage.setItem('refresh_token', refresh_token);
        navigate('/guide/first');
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
}
