import { useEffect } from 'react';
import { useCurrentMusic, useSetCurrentMusic } from './MusicContext';
import MusicItem from './MusicItem';

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
    musicImgUrl: '',
  },
  {
    musicID: 5,
    musicName: '좋은 밤 좋은 꿈',
    musicArtist: '너드커넥션',
    musicCategory: '',
    musicImgUrl: '',
  },
  {
    musicID: 6,
    musicName: 'Think About`chu',
    musicArtist: '아소토유니온',
    musicCategory: '',
    musicImgUrl: '',
  },
  {
    musicID: 7,
    musicName: '오랜만에',
    musicArtist: '김현철',
    musicCategory: '',
    musicImgUrl: '',
  },
  {
    musicID: 8,
    musicName: 'Afraid',
    musicArtist: 'DAY6',
    musicCategory: '',
    musicImgUrl: '',
  },
];

function Playlist() {
  const current = useCurrentMusic();
  const setCurrent = useSetCurrentMusic();

  useEffect(() => {
    setCurrent(playlist[0]);
  }, []);

  return (
    <div className="playlist">
      <div className="playlist__current-music">
        <div className="current-music__title">{current?.musicName}</div>
        <div className="current-music__artist">{current?.musicArtist}</div>
      </div>
      <div className="playlist__list">
        {playlist.map((item) => (
          <MusicItem
            key={item.musicID}
            active={[
              'list__item',
              current?.musicID === item.musicID ? 'list__item--active' : '',
            ]}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Playlist;
