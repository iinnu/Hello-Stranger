import { useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { useResultContext } from 'components/Recommend/Context/ResultContext';
import { setCurrentFood } from 'components/Recommend/Context/foodReducer';
import { setCurrentActivity } from 'components/Recommend/Context/activityReducer';
import StoreItem from 'components/Recommend/Category/Detail/List/StoreItem';

export default function StoreDrawer({ type, list, setOpen }) {
  const [category, setCategory] = useState('전체');
  const { state, dispatch } = useRecommendContext();
  const { setCurrentStore } = useResultContext();

  const { current } = state[type + 'Reducer'];
  const storeList = list.map((item) => item.store);

  const handleClickStoreItem = (item) => {
    setCurrentStore(item);
    setOpen(false);
  };

  const handleClickCategory = (value, item) => {
    setCategory(value);
    if (value !== '전체') {
      const actionCreator =
        type === 'food' ? setCurrentFood : setCurrentActivity;
      dispatch(actionCreator(item));
    }
    document.querySelector('.category-select__store-list').scrollTo(0, 0);
  };

  return (
    <div className="drawer__list-inner">
      <div className="drawer__list-inner__desc">
        * 카테고리를 선택하면 가게 목록을 볼 수 있습니다
      </div>
      <div className="drawer__category-select">
        <div className="category-select__category-list">
          <div
            className={
              category === '전체'
                ? 'category-select__category-list__item category-select__category-list__item--active'
                : 'category-select__category-list__item'
            }
            onClick={() => handleClickCategory('전체')}
          >
            전체
          </div>
          {list.map((item) => (
            <div
              key={item[type + 'Category']}
              className={
                category === item[type + 'Category']
                  ? 'category-select__category-list__item category-select__category-list__item--active'
                  : 'category-select__category-list__item'
              }
              onClick={() => handleClickCategory(item[type + 'Category'], item)}
            >
              {item[type + 'Category']}
            </div>
          ))}
        </div>
        <div className="category-select__store-list">
          {category === '전체' &&
            storeList.map((stores) =>
              stores.map((store) => (
                <StoreItem
                  key={store.id}
                  item={store}
                  handleClick={() => handleClickStoreItem(store)}
                />
              ))
            )}
          {category !== '전체' &&
            current?.store.map((item) => (
              <StoreItem
                key={item.id}
                item={item}
                handleClick={() => handleClickStoreItem(item)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
