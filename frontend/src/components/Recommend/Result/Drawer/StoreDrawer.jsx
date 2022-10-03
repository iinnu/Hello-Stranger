import { useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { setCurrentFood } from 'components/Recommend/Context/foodReducer';
import { setCurrentActivity } from 'components/Recommend/Context/activityReducer';
import sample from 'assets/images/sample.jpg';
import StoreItem from 'components/Recommend/Category/Detail/List/StoreItem';

export default function StoreDrawer({ type, list }) {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useRecommendContext();
  const { current } = state[type + 'Reducer'];

  const handleCategoryClick = (item) => {
    const actionCreator = item.foodCategory
      ? setCurrentFood
      : setCurrentActivity;
    dispatch(actionCreator(item));
    setOpen(true);
  };

  return (
    <div className="drawer__list-inner">
      {!open && (
        <>
          <div className="drawer__list-inner__desc">
            * 카테고리를 선택하면 가게 목록을 볼 수 있습니다
          </div>
          <div className="category-list__inner">
            {list
              .filter((item) => item.choiceYN !== 2)
              .map((item) => (
                <div
                  key={item[type + 'Category']}
                  className="category-card"
                  onClick={() => handleCategoryClick(item)}
                >
                  <div className="category-card__img-wrapper">
                    <img src={sample} alt="cateogry-img" />
                  </div>
                  <div className="category-card__category-desc">
                    <div className="category-desc__inner">
                      <span>{item[type + 'Category']}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      {open && current.store.map((item) => <StoreItem item={item} />)}
    </div>
  );
}
