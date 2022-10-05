import { useEffect, useState } from 'react';
import useSpotifyReady from 'hook/useSpotifyReady';

export default function Playback() {
  const [token, setToken] = useState();
  const ready = useSpotifyReady();

  // set spotify access token
  useEffect(() => {
    const spotify = localStorage.getItem('spotify');
    if (spotify) {
      setToken(spotify);
      return;
    }
  }, []);

  // set spotify playback sdk
  useEffect(() => {
    // sdk를 사용할 수 있고 access token이 있을 때
    if (ready && token) {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(token);
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
}
