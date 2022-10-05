import { useEffect, useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { setCurrentStore as activityStore } from 'components/Recommend/Context/activityReducer';
import { setCurrentStore as foodStore } from 'components/Recommend/Context/foodReducer';
import styled from '@emotion/styled';
import Drawer from '@mui/material/Drawer';
import Title from './Title';
import StoreMap from './Map/StoreMap';
import StoreItem from './List/StoreItem';
import NoResult from './NoResult';

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: 100%;
    width: 100%;
    max-width: 500px;
    padding: 0;
    border-radius: 0;
  }
`;

export default function CategoryDetail({ current, open, handleClose }) {
  const [isList, setIsList] = useState(true);
  const { dispatch } = useRecommendContext();
  const { index } = useRecommendContext().state.indexReducer;

  const ToggleDrawer = () => {
    setIsList(true);
    handleClose();
  };

  const handleClick = () => {
    setIsList(!isList);
  };

  useEffect(() => {
    const actionCreator = index === 1 ? foodStore : activityStore;
    dispatch(actionCreator(current?.store[0]));
  }, []);

  return (
    <CustomDrawer anchor="right" open={open} onClose={ToggleDrawer}>
      <Title
        title={
          current?.foodCategory
            ? current?.foodCategory
            : current?.activityCategory
        }
        isList={isList}
        handleClick={handleClick}
        handleClose={ToggleDrawer}
      />
      {isList && (
        <div className="category-store-list">
          {current?.store.map((item) => (
            <StoreItem key={item.id} item={item} handleClick={handleClick} />
          ))}
          {current?.store.length === 0 && <NoResult />}
        </div>
      )}
      {!isList && <StoreMap list={current.store} />}
    </CustomDrawer>
  );
}
