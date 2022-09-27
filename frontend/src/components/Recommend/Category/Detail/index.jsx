import styled from '@emotion/styled';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import Title from './Title';
import CategoryStoreList from './List/StoreList';
import StoreMap from './Map/StoreMap';

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

  const ToggleDrawer = () => {
    setIsList(true);
    handleClose();
  };

  const handleClick = () => {
    setIsList(!isList);
  };

  return (
    <CustomDrawer anchor="right" open={open} onClose={ToggleDrawer}>
      <Title
        title={
          current.foodCategory ? current.foodCategory : current.activityCategory
        }
        isList={isList}
        handleClick={handleClick}
        handleClose={ToggleDrawer}
      />
      {isList && <CategoryStoreList list={current.store} />}
      {!isList && <StoreMap list={current.store} />}
    </CustomDrawer>
  );
}
