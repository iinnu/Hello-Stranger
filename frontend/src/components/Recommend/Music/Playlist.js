import { useEffect, useState } from 'react';
import { useCurrentMusic, useSetCurrentMusic } from './MusicContext';
import usePullToRefresh from 'hook/usePullToRefresh';
import useSpotifyReady from 'hook/useSpotifyReady';
import MusicItem from './MusicItem';
import { getSpotifyToken } from 'api/spotify';

const playlist = [
  {
    musicID: 1,
    musicName: '가장 보통의 존재',
    musicArtist: '언니네 이발관',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/066/039/122/66039122_1395715494760_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 2,
    musicName: '정말 사랑했을까',
    musicArtist: '브라운아이드소울',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/027/251/15027251_1388739020483_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 3,
    musicName: 'starlight',
    musicArtist: 'Muse',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/040/585/421/40585421_1393312393347_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 4,
    musicName: '신경쓰여',
    musicArtist: '비비',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/352/887/81352887_1580457272856_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 5,
    musicName: '좋은 밤 좋은 꿈',
    musicArtist: '너드커넥션',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/392/508/81392508_1584692219778_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 6,
    musicName: 'Think About`chu',
    musicArtist: '아소토유니온',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/027/829/15027829_1310533115577_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 7,
    musicName: '오랜만에',
    musicArtist: '김현철',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/032/851/15032851_1310028555858_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 8,
    musicName: 'Afraid',
    musicArtist: 'DAY6',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/438/259/81438259_1589175437111_1_600x600.JPG/dims/resize/Q_80,0',
  },
];

function Playlist() {
  const current = useCurrentMusic();
  const setCurrent = useSetCurrentMusic();
  const ready = useSpotifyReady();
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();
  const [token, setToken] = useState(false);

  // set spotify access token
  useEffect(() => {
    const spotify = window.localStorage.getItem('spotify');
    if (spotify) {
      setToken(true);
      return;
    }
    getSpotifyToken(
      (res) => {
        window.localStorage.setItem('spotify', res.data.access_token);
        setToken(true);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // set spotify playback sdk
  useEffect(() => {
    // sdk를 사용할 수 있고 access token이 있을 때
    if (ready && token) {
      console.log('hello');
      const spotify = window.localStorage.getItem('spotify');
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(spotify);
        },
        volume: 0.5,
      });

      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) {
          return;
        }
        console.log('state changed', state);
      });

      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });

      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });

      player.connect();
    }
  }, [ready, token]);

  return (
    <div className="playlist">
      <div className="playlist__current-music">
        <div className="current-music__title">{current?.musicName}</div>
        <div className="current-music__artist">{current?.musicArtist}</div>
      </div>
      <div
        className="playlist__list"
        ref={div}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {playlist.map((item) => (
          <MusicItem
            key={item.musicID}
            active={current?.musicID === item.musicID ? true : false}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
