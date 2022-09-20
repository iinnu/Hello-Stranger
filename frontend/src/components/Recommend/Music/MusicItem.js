import { useState } from 'react';
import { useSetCurrentMusic } from './MusicContext';
import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const getClassName = (active) => {
  let className = 'music-item ';
  if (active) className += 'music-item--active';
  return className.trim();
};

function MusicItem({ active, item }) {
  let className = getClassName(active);
  const setCurrent = useSetCurrentMusic();
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleItemClick = () => {
    setCurrent(item);
  };

  const handleLike = () => {
    if (dislike) setDislike(false);
    setLike(!like);
  };

  const handleDislike = () => {
    if (like) setLike(false);
    setDislike(!dislike);
  };

  return (
    <div className={className}>
      <div className="list__item" onClick={handleItemClick}>
        <div className="item__title">{item.musicName}</div>
        <div className="item__artist">{item.musicArtist}</div>
      </div>
      <div className="item__like">
        <IconButton onClick={handleLike}>
          {!like && <ThumbUpOffAltIcon />}
          {like && <ThumbUpAltIcon />}
        </IconButton>
        <IconButton onClick={handleDislike}>
          {!dislike && <ThumbDownOffAltIcon />}
          {dislike && <ThumbDownAltIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default MusicItem;
