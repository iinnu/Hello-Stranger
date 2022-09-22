import { useState } from 'react';
import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function CategoryCard() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleLike = () => {
    if (dislike) setDislike(false);
    setLike(!like);
  };

  const handleDislike = () => {
    if (like) setLike(false);
    setDislike(!dislike);
  };

  return (
    <div className="category-card">
      <div className="category-card__img-wrapper">사진</div>
      <div className="category-card__category-desc">
        <div className="category-desc__inner">
          <span>카테고리 이름</span>
          <div className="category-desc__like">
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
      </div>
    </div>
  );
}
