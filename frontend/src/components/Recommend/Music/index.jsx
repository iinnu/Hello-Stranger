import 'styles/Recommend/Music.scss';
import AlbumCover from './AlbumCover';
import Playlist from './Playlist';

export default function Music() {
  return (
    <div className="music-player">
      <div className="music-player__inner">
        <AlbumCover />
        <Playlist />
      </div>
    </div>
  );
}
