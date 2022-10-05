import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { useRecommendContext } from '../Context/RecommendContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function AlbumCover() {
  const [play, setPlay] = useState(false);
  const { state } = useRecommendContext();
  const { list, current } = state.musicReducer;
  const [prev, setPrev] = useState(current);

  const albumImg = {
    backgroundImage: `url(${current?.musicImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: '0 30%',
  };

  const handlePlay = () => {
    const prevAudio = document.getElementById(`preview-${prev.musicID}`);
    const currentAudio = document.getElementById(`preview-${current.musicID}`);

    // 현재 재생중인 음악이 있으면 멈춤
    if(play && prev.musicID !== current.musicID && !prevAudio.paused) {
      prevAudio.pause();
    }
    else if(!play) {
      if(prev.musicID !== current.musicID) setPrev(current);
      currentAudio.play();
      setPlay(true);
    }
    else if(play) {
      if(prev.musicID === current.musicID) currentAudio.pause();
      setPlay(false);
    }
  };

  useEffect(() => {
    if(current) {
      const pre = document?.getElementById(`preview-${prev.musicID}`);
      const cur = document?.getElementById(`preview-${current.musicID}`);
      if(!pre.paused) {
        pre.pause();
        if(current.preview) cur.play();
        else setPlay(false);
        setPrev(current);
      }
    }
  }, [current])

  return (
    <div className="album-cover" style={albumImg}>
      <div className="album-cover__darken" />
      <div className="album-cover__play-button">
        <IconButton onClick={handlePlay}>
          {!play && <PlayArrowIcon />}
          {play && <PauseIcon />}
        </IconButton>
        {list.map((item) => (
          <audio
            key={item.musicID}
            id={`preview-${item.musicID}`}
            src={item.preview}
          />
        ))}
      </div>
    </div>
  );
}

export default AlbumCover;
