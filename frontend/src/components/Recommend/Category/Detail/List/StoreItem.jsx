import styled from '@emotion/styled';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { setCurrentStore as activityStore } from 'components/Recommend/Context/activityReducer';
import { setCurrentStore as foodStore } from 'components/Recommend/Context/foodReducer';

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function StoreItem({ item, active, handleClick }) {
  const { state, dispatch } = useRecommendContext();
  const { index } = state.indexReducer;

  const handleItemClick = () => {
    const actionCreator = index === 1 ? foodStore : activityStore;
    dispatch(actionCreator(item));
    handleClick();
  };

  return (
    <div
      className={active ? 'store-item store-item--active' : 'store-item'}
      onClick={handleItemClick}
    >
      <Col>
        <div className="store-item__title">{item.name}</div>
        <span className="store-item__address">{item.address}</span>
      </Col>
      <div className="store-item__img-wrapper">
        {item.imgUrl && <img src={item.imgUrl} alt="store preview" />}
      </div>
    </div>
  );
}
