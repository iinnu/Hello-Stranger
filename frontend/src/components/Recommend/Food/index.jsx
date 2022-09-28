import 'styles/Recommend/Category.scss';
import { useState } from 'react';
import { useRecommendContext } from '../Context/RecommendContext';
import { setCurrentFood } from '../Context/foodReducer';
import usePullToRefresh from 'hook/usePullToRefresh';
import CategoryCard from '../Category';
import CategoryDetail from '../Category/Detail';

export default function Food() {
  const [openDetail, setOpenDetail] = useState(false);
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();
  const { state, dispatch } = useRecommendContext();
  const { list, current } = state.foodReducer;

  const handleOpenDetail = (food) => {
    dispatch(setCurrentFood(food));
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <>
      <div
        className="category-list"
        ref={div}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="category-list__inner">
          {list.map((item) => (
            <CategoryCard
              item={item}
              key={item.foodCategory}
              category={item.foodCategory}
              handleOpenDetail={handleOpenDetail}
            />
          ))}
        </div>
      </div>
      <CategoryDetail
        current={current}
        open={openDetail}
        handleClose={handleCloseDetail}
      />
    </>
  );
}
