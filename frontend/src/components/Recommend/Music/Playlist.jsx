import { useLocation } from 'react-router-dom';
import { useRecommendContext } from '../Context/RecommendContext';
import usePullToRefresh from 'hook/usePullToRefresh';
import MusicItem from './MusicItem';

function Playlist() {
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();
  const { state } = useRecommendContext();
  const { list, current } = state.musicReducer;
  const { pathname } = useLocation();

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
        {!pathname.includes('result') &&
          list.map((item) => (
            <MusicItem
              key={item.musicID}
              active={item.musicID === current.musicID ? true : false}
              item={item}
              result={false}
            />
          ))}
        {pathname.includes('result') &&
          list
            .filter((item) => item.choiceYN !== 2)
            .map((item) => (
              <MusicItem
                key={item.musicID}
                active={item.musicID === current.musicID ? true : false}
                item={item}
                result={true}
              />
            ))}
      </div>
    </div>
  );
}

export default Playlist;
