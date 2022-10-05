import { useLocation } from 'react-router-dom';
import { useRecommendContext } from '../Context/RecommendContext';
import usePullToRefresh from 'hook/usePullToRefresh';
import MusicItem from './MusicItem';

function Playlist() {
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();
  const { state } = useRecommendContext();
  const { list, current, recommend, rec_current } = state.musicReducer;
  const { pathname } = useLocation();
  const result = pathname.includes('result');

  return (
    <div className="playlist">
      <div className="playlist__current-music">
        <div className="current-music__title">
          {result ? rec_current?.musicName : current?.musicName}
        </div>
        <div className="current-music__artist">
          {result ? rec_current?.musicArtist : current?.musicArtist}
        </div>
      </div>
      <div
        className="playlist__list"
        ref={div}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {!result &&
          list.map((item) => (
            <MusicItem
              key={item.musicID}
              active={item.musicID === current.musicID ? true : false}
              item={item}
              result={false}
            />
          ))}
        {result &&
          recommend.map((item) => (
            <MusicItem
              key={item.musicID}
              active={item.musicID === rec_current.musicID ? true : false}
              item={item}
              result={true}
            />
          ))}
      </div>
    </div>
  );
}

export default Playlist;
