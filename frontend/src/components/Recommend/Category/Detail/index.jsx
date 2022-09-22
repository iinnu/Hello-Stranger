import styled from '@emotion/styled';
import { Drawer } from '@mui/material';
import CategoryMap from './CategoryMap';
import CategoryStoreList from '../Store';
import Title from './Title';

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
  return (
    <CustomDrawer anchor="right" open={open} onClose={handleClose}>
      <Title handleClose={handleClose} />
      <CategoryStoreList />
    </CustomDrawer>
  );
}
