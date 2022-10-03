import { useEffect } from 'react';
import { getApiInstance } from 'api';
import { getSpotifyToken, getSpotifyUserInfo } from 'api/spotify';
import { setRefreshToken } from 'store/Cookie';
import queryString from 'query-string';

export default function SpotifyRedirectHandler() {
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
        const accessToken = res.data.access_token;
        const refreshToken = res.data.refresh_token;

        localStorage.setItem('spotify', accessToken);
        setRefreshToken(refreshToken);
        
        // 스포티파이에서 유저 정보 얻기
        const info = await getSpotifyUserInfo(accessToken);
        // 유저 정보를 성공적으로 얻었으면 로그인 요청
        if (info?.status === 200) {
          const email = { 
            'email': info.data.email,
            'img': 'https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927',
            'nickname': info.data.display_name,
            }
          console.log(email) 
          localStorage.setItem('email', email.email)
          const login = await getApiInstance().post('/user', email);

          // 로그인 성공 시, 첫 로그인 여부에 따라서 페이지 다르게 이동
          if (login?.status === 200) {
            localStorage.setItem('token', login.data.accessToken);
            // localStorage.setItem('email', info.data.email)
            window.location.replace('/guide/first');
          }
          // 로그인 실패 시
          else {
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
        // window.location.replace('/guide/first');
      }
    );
  }, []);
}
