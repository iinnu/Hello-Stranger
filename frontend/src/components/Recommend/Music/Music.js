import 'styles/Recommend/Music.scss';
import { useEffect } from 'react';
import { MusicProvider } from './MusicContext';
import Title from '../Title';
import AlbumCover from './AlbumCover';
import Playlist from './Playlist';
import { getMusicRecommend } from 'api/recommend';

function Music() {
  useEffect(() => {
    console.log('음악 추천 로딩');
  }, []);

  return (
    <div className="recommend-content">
      <Title>
        <>
          어떤 음악을 <br />
          듣고 싶으신가요?
        </>
      </Title>
      <div className="music-player">
        <div className="music-player__inner">
          <MusicProvider>
            <AlbumCover />
            <Playlist />
          </MusicProvider>
        </div>
      </div>
    </div>
  );
}

export default Music;
