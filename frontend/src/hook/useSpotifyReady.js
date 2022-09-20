import { useEffect, useState } from 'react';

export default function useSpotifyReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      setReady(true);
    };
  }, []);

  return ready;
}
