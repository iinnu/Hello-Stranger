import styled from '@emotion/styled';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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

const getStoreTime = (list) => {
  if (list.length === 0) return list;
  const splitByDay = list.split('//').filter((item) => item !== '');
  const splitByTime = splitByDay.map((item) => {
    const timeList = item.split('||').filter((T) => T !== '');
    const timeData = { main: timeList[0] };
    if (timeList.length > 1) {
      timeData.more = [];
      for (let i = 1; i < timeList.length; i++) timeData.more.push(timeList[i]);
    }
    return timeData;
  });
  return splitByTime;
};

export default function StoreInfoDrawer({ store, open, toggleDrawer }) {
  const time = getStoreTime(store.time);
  const review = store.review.filter((item) => item !== '');

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
            {store.imgUrl && (
              <img className="main__image" src={store.imgUrl} alt="store img" />
            )}
            <div className="main__title">{store.name}</div>
            <div className="main__status">
              <div className="store-info__scope">
                <div className="store-info__scope__inner">
                  {store.rating ? store.rating : '0.0 '}
                </div>
                <Rating
                  name="half-rating-read"
                  value={store.rating ? store.rating : 0}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </div>
            </div>
          </div>
        </StyledBox>
        <StyledBox className="store-info-drawer__detail">
          <div className="detail detail__address">
            <LocationOnIcon />
            {store.address ? (
              <div className="detail__item detail__exist">{store.address}</div>
            ) : (
              <div className="detail__item detail__none">
                등록된 주소가 없습니다.
              </div>
            )}
          </div>
          <div className="detail detail__phone">
            <PhoneIcon />
            {store.phone ? (
              <div className="detail__item detail__exist">{store.phone}</div>
            ) : (
              <div className="detail__item detail__none">
                등록된 연락처가 없습니다.
              </div>
            )}
          </div>
          <div className="detail detail__hours">
            <AccessTimeIcon />
            {time.length !== 0 ? (
              <div className="detail__item detail__exist">
                {time.map((item, index) => (
                  <>
                    <div className="detail__hours--main" key={item.main}>
                      {item.main}
                    </div>
                    {item.more?.map((i) => (
                      <div key={i} className="detail__hours--more">
                        {i}
                      </div>
                    ))}
                  </>
                ))}
              </div>
            ) : (
              <div className="detail__item detail__none">
                등록된 영업시간이 없습니다.
              </div>
            )}
          </div>
        </StyledBox>
        <StyledBox className="store-info-drawer__review">
          <div className="review__title">
            <div>리뷰 ({review.length})</div>
            <div>*네이버 지도 리뷰</div>
          </div>
          {review.length !== 0 &&
            review.map((item, index) => (
              <StoreReview key={index}>{item}</StoreReview>
            ))}
        </StyledBox>
      </div>
    </CustomSwipeableDrawer>
  );
}
