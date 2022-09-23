import styled from '@emotion/styled';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import Title from './Title';
import CategoryStoreList from './List/StoreList';
import Map from './Map';

const CustomDrawer = styled(Drawer)`
  .MuiPaper-root {
    height: 100%;
    width: 100%;
    max-width: 500px;
    padding: 0;
    border-radius: 0;
  }
`;

export default function CategoryDetail({ open, handleClose }) {
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
        isList={isList}
        handleClick={handleClick}
        handleClose={ToggleDrawer}
      />
      {isList && <CategoryStoreList />}
      {!isList && <Map />}
    </CustomDrawer>
  );
}
