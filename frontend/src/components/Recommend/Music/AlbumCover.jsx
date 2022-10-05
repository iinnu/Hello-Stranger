import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecommendContext } from '../Context/RecommendContext';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

function AlbumCover() {
  const { state } = useRecommendContext();
  const { list, current, recommend, rec_current } = state.musicReducer;
  const { pathname } = useLocation();
  const [play, setPlay] = useState(false);
  const [prev, setPrev] = useState(
    pathname.includes('result') ? rec_current : current
  );

  const albumImg = {
    backgroundImage: pathname.includes('result')
      ? `url(${rec_current?.musicImgUrl})`
      : `url(${current?.musicImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: '0 30%',
  };

  const handlePlay = () => {
    const cur = pathname.includes('result') ? rec_current : current;
    const curAudio = document.getElementById(`preview-${cur.musicID}`);
    // 재생 중이 아니면
    if (!play) {
      if (prev.musicID !== cur.musicID) setPrev(cur);
      if (cur.preview) {
        curAudio.play();
        setPlay(true);
      }
      // 현재 재생 중이면
    } else {
      if (prev.musicID === cur.musicID) curAudio.pause();
      setPlay(false);
    }
  };

  // 추천 페이지
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
      }
    }
  }, [current]);

  // 추천 결과 페이지
  useEffect(() => {
    if (rec_current) {
      const pre = document?.getElementById(`preview-${prev.musicID}`);
      const cur = document?.getElementById(`preview-${rec_current.musicID}`);
      // 재생 중에 선택한 목록이 바뀌면
      if (!pre.paused) {
        // 재생 중인걸 멈춤
        pre.pause();
        if (rec_current.preview) {
          setPrev(rec_current);
          cur.play();
        } else setPlay(false);
      }
    }
  }, [rec_current]);

  return (
    <div className="album-cover" style={albumImg}>
      <div className="album-cover__darken" />
      <div className="album-cover__play-button">
        <IconButton onClick={handlePlay}>
          {!play && <PlayArrowIcon />}
          {play && <PauseIcon />}
        </IconButton>
        {!pathname.includes('result') &&
          list.map((item) => (
            <audio
              key={item.musicID}
              id={`preview-${item.musicID}`}
              src={item.preview}
            />
          ))}
        {pathname.includes('result') &&
          recommend.map((item) => (
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
