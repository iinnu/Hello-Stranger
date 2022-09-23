import { useState } from 'react';
import { useRecommendContext } from '../Context/RecommendContext';
import { setCurrentMusic } from '../Context/musicReducer';
import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import classNames from 'classnames';

function MusicItem({ active, item }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const { dispatch } = useRecommendContext();

  const handleClickItem = () => {
    dispatch(setCurrentMusic(item));
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
    <div
      className={
        active ? classNames('music-item', 'music-item--active') : 'music-item'
      }
      onClick={handleClickItem}
    >
      <div className="list__item">
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
