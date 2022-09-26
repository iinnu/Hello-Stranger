import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from '@emotion/styled';

const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    padding: 0;
    width: 100%;
    max-width: 500px;
    right: 0;
    left: unset;
    box-shadow: 0px -2px 5px 0px #d6d6d6;
    border-radius: 0;
    background-color: #f1f1f1;
  }
`;

const StyledBox = styled('div')`
  margin-bottom: 8px;
  background-color: white;
`;

const backdrop = {
  style: { background: 'none' },
};

export default function StoreInfoDrawer({ open, toggleDrawer }) {
  return (
    <CustomSwipeableDrawer
      anchor="bottom"
      open={open}
      disable
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition
      disableDiscovery
      disableSwipeToOpen
      ModalProps={{
        componentsProps: { backdrop: backdrop },
      }}
    >
      <StyledBox>
        <div>사진</div>
        <div>XX 만두가게</div>
        <div>
          <span>영업중</span>
          <span>별점</span>
        </div>
      </StyledBox>
      <StyledBox>대구광역시 중구 동인동</StyledBox>
      <StyledBox>010-0000-0000</StyledBox>
      <StyledBox>리뷰</StyledBox>
    </CustomSwipeableDrawer>
  );
}
