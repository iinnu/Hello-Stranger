import 'styles/Recommend/Food.scss';
import CategoryCard from '../CategoryCard';

export default function Food() {
  return (
    <div className="food-list">
      <div className="food-list__inner">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}
