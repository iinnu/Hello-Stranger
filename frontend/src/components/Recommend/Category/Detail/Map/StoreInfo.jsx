import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';

export default function StoreInfo({ store, toggleDrawer }) {
  return (
    <div className="store-info" onClick={toggleDrawer(true)}>
      <div className="store-info__top">
        <span className="top__title">{store.name}</span>
      </div>
      <div className="store-info__scope">
        <div className="store-info__scope__inner">
          {store.rating ? store.rating : '0.0 '}
        </div>
        <Rating
          name="half-rating-read"
          value={store.rating ? +store.rating : 0}
          precision={0.1}
          size="small"
          readOnly
        />
        <Divider orientation="vertical" flexItem />
        <div>리뷰 {store.review.filter((item) => item !== '').length}</div>
      </div>
      <div className="store-info__address">{store.address}</div>
    </div>
  );
}
