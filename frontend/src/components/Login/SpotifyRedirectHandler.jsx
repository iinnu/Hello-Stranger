import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSpotifyContext } from 'Context';
import { getSpotifyToken } from 'api/spotify';
import queryString from 'query-string';
import { getSpotifyApi } from 'api';

export default function SpotifyRedirectHandler() {
  const { setToken } = useSpotifyContext();
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
      async (res) => {
        // 스포티파이 토큰 저장
        const access_token = res.data.access_token;
        const refresh_token = res.data.refresh_token;
        setToken(access_token);
        localStorage.setItem('refresh_token', refresh_token);
        // 유저 정보 얻기
        const spotify = getSpotifyApi(access_token);
        const info = await spotify.get('/me');
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
}
