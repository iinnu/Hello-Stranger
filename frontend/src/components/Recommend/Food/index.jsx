import { useState } from 'react';
import 'styles/Recommend/Category.scss';
import CategoryCard from '../Category/CategoryCard';
import CategoryDetail from '../Category/CategoryDetail';

export default function Food() {
  const [openDetail, setOpenDetail] = useState(false);

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  return (
    <>
      <div className="category-list">
        <div className="category-list__inner">
          <CategoryCard handleOpen={handleOpenDetail} />
          <CategoryCard />
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
