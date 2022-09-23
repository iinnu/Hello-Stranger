import 'styles/Recommend/Music.scss';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AlbumCover from './AlbumCover';
import Playlist from './Playlist';

export default function Music() {
  return (
    <HelmetProvider>
      <Helmet>
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </Helmet>
      <div className="music-player">
        <div className="music-player__inner">
          <AlbumCover />
          <Playlist />
        </div>
      </div>
    </HelmetProvider>
  );
}
