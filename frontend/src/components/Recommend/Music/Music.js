import 'styles/Recommend/Music.scss';
import Title from '../Title';
import AlbumCover from './AlbumCover';
import Playlist from './Playlist';

function Music() {
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
          <AlbumCover />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default Music;
