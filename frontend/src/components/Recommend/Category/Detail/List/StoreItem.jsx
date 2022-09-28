import styled from '@emotion/styled';
import sample from 'assets/images/sample.jpg';
import { setCurrentStore as activityStore } from 'components/Recommend/Context/activityReducer';
import { setCurrentStore as foodStore } from 'components/Recommend/Context/foodReducer';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function StoreItem({ item, handleClick }) {
  const { state, dispatch } = useRecommendContext();
  const { index } = state.indexReducer;

  const handleItemClick = () => {
    const actionCreator = index === 1 ? foodStore : activityStore;
    dispatch(actionCreator(item));
    handleClick();
  };

  return (
    <div className="store-item" onClick={handleItemClick}>
      <Col>
        <div className="store-item__title">
          {item.foodName ? item.foodName : item.activityName}
        </div>
        <span className="store-item__address">
          {item.foodAddress ? item.foodAddress : item.activityAddress}
        </span>
      </Col>
      <div className="store-item__img-wrapper">
        <img src={sample} alt="store preview" />
      </div>
    </div>
  );
}
