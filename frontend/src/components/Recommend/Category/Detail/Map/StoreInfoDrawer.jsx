import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import sample from 'assets/images/sample.jpg';
import OpenClosed from '../OpenClosed';
import StoreReview from './StoreReview';

const backdrop = {
  style: { background: 'none' },
};

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
    height: 75%;
  }
`;

const StyledBox = styled('div')`
  margin-bottom: 8px;
  background-color: white;
`;

const CustomLabel = styled(Button)`
  background-color: white;
  color: black;
  cursor: default;

  &:hover {
    background: none;
  }

  & .MuiTouchRipple-root {
    display: none;
  }
`;

export default function StoreInfoDrawer({ store, open, toggleDrawer }) {
  return (
    <CustomSwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition
      disableDiscovery
      disableSwipeToOpen
      ModalProps={{
        componentsProps: { backdrop: backdrop },
      }}
    >
      <div className="store-info-drawer">
        <StyledBox className="store-info-drawer__main">
          <div>
            <img className="main__image" src={sample} alt="store img" />
            <div className="main__title">{store.name}</div>
            <div className="main__status">
              <span>★ 4.5/5</span>
            </div>
          </div>
        </StyledBox>
        <StyledBox className="store-info-drawer__detail">
          <div className="detail detail__address">
            <CustomLabel startIcon={<LocationOnIcon />}>
              {store.address}
            </CustomLabel>
          </div>
          <div className="detail detail__phone">
            <CustomLabel startIcon={<PhoneIcon />}>010-0000-0000</CustomLabel>
          </div>
          <div className="detail detail__hours">
            <CustomLabel startIcon={<AccessTimeIcon />}>
              {store.time ? store.time : '등록된 영업시간이 없습니다'}
            </CustomLabel>
          </div>
        </StyledBox>
        <StyledBox className="store-info-drawer__review">
          <div className="review__title">
            <div>리뷰</div>
            <div>*네이버 지도 리뷰</div>
          </div>
        </StyledBox>
      </div>
    </CustomSwipeableDrawer>
  );
}
