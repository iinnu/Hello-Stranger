import 'styles/Recommend/Category.scss';
import { useState } from 'react';
import usePullToRefresh from 'hook/usePullToRefresh';
import CategoryCard from '../Category';
import CategoryDetail from '../Category/Detail';

export default function Food() {
  const [openDetail, setOpenDetail] = useState(false);
  const { div, handleTouchStart, handleTouchMove, handleTouchEnd } =
    usePullToRefresh();

  const handleOpenDetail = () => {
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
          <CategoryCard handleOpen={handleOpenDetail} />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
      <CategoryDetail open={openDetail} handleClose={handleCloseDetail} />
    </>
  );
}
