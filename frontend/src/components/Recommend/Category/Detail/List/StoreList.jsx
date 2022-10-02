import StoreItem from './StoreItem';

export default function CategoryStoreList({ list, handleClick }) {
  return (
    <div className="category-store-list">
      {list.map((store) => (
        <StoreItem key={store.id} item={store} handleClick={handleClick} />
      ))}
    </div>
  );
}
