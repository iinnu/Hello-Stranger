import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useRecommendContext } from '../Context/RecommendContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function AlbumCover() {
  const [play, setPlay] = useState(false);
  const { state } = useRecommendContext();
  const { current } = state.musicReducer;

  const albumImg = {
    backgroundImage: `url(${current?.musicImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: '0 30%',
  };

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="album-cover" style={albumImg}>
      <div className="album-cover__darken" />
      <div className="album-cover__play-button">
        <IconButton onClick={handlePlay}>
          {!play && <PlayArrowIcon />}
          {play && <PauseIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default AlbumCover;
