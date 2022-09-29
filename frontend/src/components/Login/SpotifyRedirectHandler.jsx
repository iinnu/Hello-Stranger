import { useEffect } from 'react';
import { useLoginToken, useSpotifyToken } from 'Context';
import { getSpotifyToken } from 'api/spotify';
import { getApiInstance, getSpotifyApi } from 'api';
import queryString from 'query-string';

export default function SpotifyRedirectHandler() {
  const { setSpotify } = useSpotifyToken();
  const { setLogin } = useLoginToken();
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
        setSpotify(access_token);
        localStorage.setItem('refresh_token', refresh_token);
        // 스포티파이에서 유저 정보 얻기
        const spotify = getSpotifyApi(access_token);
        const info = await spotify.get('/me');
        // 유저 정보를 성공적으로 얻었으면 로그인 요청
        if (info.status === 200) {
          const email = { idToken: info.data.email };
          const login = await getApiInstance().post('/user', email);
          // 로그인 성공 시, 첫 로그인 여부에 따라서 페이지 다르게 이동
          if (login.status === 200) {
            setLogin(login.data.accessToken);
            window.location.replace('/guide/first');
            // 로그인 실패 시
          } else {
            alert('로그인에 실패했습니다.');
            window.location.replace('/');
          }
        } else {
          alert('유저 정보를 얻을 수 없습니다.');
          window.location.replace('/');
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
}
