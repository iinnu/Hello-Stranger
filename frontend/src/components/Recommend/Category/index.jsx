import { useState } from 'react';
import { useRecommendContext } from '../Context/RecommendContext';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import sample from 'assets/images/sample.jpg';
import sample2 from 'assets/images/sample2.png';
import { setFoodChoice } from '../Context/foodReducer';

export default function CategoryCard({ item, category, handleOpenDetail }) {
  const { state, dispatch } = useRecommendContext();
  const { index } = state.indexReducer;
  const [like, setLike] = useState(item.choiceYN === 1 ? true : false);
  const [dislike, setDislike] = useState(item.choiceYN === 2 ? true : false);

  const handleLike = () => {
    if (dislike) setDislike(false);
    if (like) {
      if (index === 1) dispatch(setFoodChoice(category, 0));
    } else {
      if (index === 1) dispatch(setFoodChoice(category, 1));
    }
    setLike(!like);
  };

  const handleDislike = () => {
    if (like) setLike(false);
    if (dislike) {
      if (index === 1) dispatch(setFoodChoice(category, 0));
    } else {
      if (index === 1) dispatch(setFoodChoice(category, 2));
    }
    setDislike(!dislike);
  };

  return (
    <div className="category-card">
      <div
        className="category-card__img-wrapper"
        onClick={() => handleOpenDetail(item)}
      >
        <img src={index === 1 ? sample : sample2} alt="cateogory-img" />
      </div>
      <div className="category-card__category-desc">
        <div className="category-desc__inner">
          <span>{category}</span>
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
