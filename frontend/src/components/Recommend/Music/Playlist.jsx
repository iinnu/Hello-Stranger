import { useLocation } from 'react-router-dom';
import { useRecommendContext } from '../Context/RecommendContext';
import usePullToRefresh from 'hook/usePullToRefresh';
import useSpotifyReady from 'hook/useSpotifyReady';
import MusicItem from './MusicItem';

function Playlist() {
  const ready = useSpotifyReady();
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();
  const { state } = useRecommendContext();
  const { list, current } = state.musicReducer;
  const { pathname } = useLocation();

  // // set spotify access token
  // useEffect(() => {
  //   const spotify = window.localStorage.getItem('spotify');
  //   if (spotify) {
  //     setToken(true);
  //     return;
  //   }
  //   getSpotifyToken(
  //     (res) => {
  //       window.localStorage.setItem('spotify', res.data.access_token);
  //       setToken(true);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }, []);

  // // set spotify playback sdk
  // useEffect(() => {
  //   // sdk를 사용할 수 있고 access token이 있을 때
  //   if (ready && token) {
  //     const spotify = window.localStorage.getItem('spotify');
  //     const player = new window.Spotify.Player({
  //       name: 'Web Playback SDK',
  //       getOAuthToken: (cb) => {
  //         cb(spotify);
  //       },
  //       volume: 0.5,
  //     });

  //     player.addListener('ready', ({ device_id }) => {
  //       console.log('Ready with Device ID', device_id);
  //     });

  //     player.addListener('not_ready', ({ device_id }) => {
  //       console.log('Device ID has gone offline', device_id);
  //     });

  //     player.addListener('player_state_changed', (state) => {
  //       if (!state) {
  //         return;
  //       }
  //       console.log('state changed', state);
  //     });

  //     player.addListener('initialization_error', ({ message }) => {
  //       console.error(message);
  //     });

  //     player.addListener('authentication_error', ({ message }) => {
  //       console.error(message);
  //     });

  //     player.addListener('account_error', ({ message }) => {
  //       console.error(message);
  //     });

  //     //player.connect();
  //   }
  // }, [ready, token]);

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
