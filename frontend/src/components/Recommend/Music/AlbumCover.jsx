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
    const currentAudio = document.getElementById(`preview-${current.musicID}`);
    // 재생 중이 아니면
    if (!play) {
      if (prev.musicID !== current.musicID) setPrev(current);
      if (current.preview) {
        currentAudio.play();
        setPlay(true);
      }
      // 현재 재생 중이면
    } else {
      if (prev.musicID === current.musicID) currentAudio.pause();
      setPlay(false);
    }
  };

  useEffect(() => {
    if (current) {
      const pre = document?.getElementById(`preview-${prev.musicID}`);
      const cur = document?.getElementById(`preview-${current.musicID}`);
      // 재생 중에 선택한 목록이 바뀌면
      if (!pre.paused) {
        // 재생 중인걸 멈춤
        pre.pause();
        if (current.preview) {
          setPrev(current);
          cur.play();
        } else setPlay(false);
        setPrev(current);
      }
    }
  }, [current]);

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
