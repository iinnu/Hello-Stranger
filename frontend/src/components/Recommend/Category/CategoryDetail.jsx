import styled from '@emotion/styled';
import { Drawer, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CategoryMap from './CategoryMap';

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
      <div>
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <div className="recommend-title category-detail__title">만두</div>
      <CategoryMap />
    </CustomDrawer>
  );
}
