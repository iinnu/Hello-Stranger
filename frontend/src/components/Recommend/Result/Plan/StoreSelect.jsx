import { useState } from 'react';
import StoreItem from 'components/Recommend/Category/Detail/List/StoreItem';

export default function StoreSelect({ type, list, current, setCurrent }) {
  const field = type + 'Category';
  const [category, setCategory] = useState(current?.category ?? list[0]);

  const handleClickCategory = (item) => {
    setCategory(item);
    document.querySelector('.category-select__store-list').scrollTo(0, 0);
  };

  const handleClickStore = (item) => {
    setCurrent({ category: category, store: item });
  };

  return (
    <>
      <div className="drawer__list-inner__desc plan__desc">
        * 카테고리를 선택하면 가게 목록을 볼 수 있습니다
      </div>
      <div className="plan__select-inner">
        <div className="category-select__category-list">
          {list.map((item) => (
            <div
              key={item[field]}
              className={
                category[field] === item[field]
                  ? 'category-select__category-list__item category-select__category-list__item--active'
                  : 'category-select__category-list__item'
              }
              onClick={() => handleClickCategory(item)}
            >
              {item[field]}
            </div>
          ))}
        </div>
        <div className="category-select__store-list">
          {category.store.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              active={current?.store.id === item.id ? true : false}
              handleClick={() => handleClickStore(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
