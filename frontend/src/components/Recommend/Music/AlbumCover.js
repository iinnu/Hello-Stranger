import { useState } from 'react';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function AlbumCover() {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  return(<div className="album-cover">
  <div className="album-cover__play-button">
    <IconButton onClick={handlePlay}>
      {!play && <PlayArrowIcon />}
      {play && <PauseIcon />}
    </IconButton>
  </div>
</div>)
}

export default AlbumCover;