import StoreItem from './StoreItem';

export default function CategoryStoreList({ list, handleClick }) {
  return (
    <div className="category-store-list">
      {list.map((item) => (
        <StoreItem
          key={item.foodId ? item.foodId : item.activityId}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
