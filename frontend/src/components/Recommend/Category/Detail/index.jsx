import styled from '@emotion/styled';
import { useState } from 'react';
import { Drawer } from '@mui/material';
import Title from './Title';
import CategoryMap from './Map/CategoryMap';
import CategoryStoreList from './List/StoreList';

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

  const handleClick = () => {
    setIsList(!isList);
  };

  return (
    <CustomDrawer anchor="right" open={open} onClose={handleClose}>
      <Title
        isList={isList}
        handleClick={handleClick}
        handleClose={handleClose}
      />
      {isList && <CategoryStoreList />}
      {!isList && <CategoryMap />}
    </CustomDrawer>
  );
}
