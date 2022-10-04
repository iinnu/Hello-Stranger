import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import sample from 'assets/images/sample.jpg';
import OpenClosed from './OpenClosed';
import StoreReview from './StoreReview';
import StoreListItems from './StoreListItems';
import {getOtherUserActivity, getOtherUserFood} from 'api/other'
import { useEffect, useState } from 'react';

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

export default function StoreContent({detailData, leftData, isHistory, type }) {
useEffect(()=>{
    console.log('휴', detailData)
},[detailData])
const Review = () => {
    console.log('review', detailData, Object.keys(detailData))
    if(Object.keys(detailData)===[]){
        return(
            <>
            <div className="review__title">
                <div>리뷰</div>
                <div>*네이버 지도 리뷰</div>
            </div>
            {detailData?.review[0] === 'noResult' && <p>리뷰 정보가 없습니다.</p>}
            {detailData?.review[0] !== 'noResult' && detailData.review.map((e)=><StoreReview content={e}/>)}
            </>
        )
    } else return;
}
  return (
    <div className="store-info-drawer">
    <StyledBox className="store-info-drawer__main">
        <div>
        <img className="main__image" src={detailData.imgUrl || sample} alt="store img" />
        <div className="main__title">{detailData?.name}</div>
        <div className="main__status">
            <span> {detailData?.rating ?  `★${detailData?.rating}/5` : `별점 정보가 없습니다.`}</span>
            <OpenClosed />
        </div>
        </div>
    </StyledBox>
    <StyledBox className="store-info-drawer__detail">
        <div className="detail detail__address">
        <CustomLabel startIcon={<LocationOnIcon />}>
            {detailData?.address}
        </CustomLabel>
        </div>
        <div className="detail detail__phone">
        <CustomLabel startIcon={<PhoneIcon />}>
            {detailData?.tel ?  detailData.tel: `전화번호 정보가 없습니다.`}
        </CustomLabel>
        </div>
        <div className="detail detail__hours">
        <CustomLabel startIcon={<AccessTimeIcon />}>
            {detailData?.time ?  detailData.time: `영업시간 정보가 없습니다.`}
        </CustomLabel>
        </div>
    </StyledBox>
    <StyledBox className="store-info-drawer__review">
    <Review/>
    </StyledBox>
    {isHistory &&
    <StyledBox className="store-info-drawer__review">
        {leftData !== [] && (
        <>
        <div className="review__title">
            <div>{leftData[0]?.category}</div>
        </div>
        {leftData.map((e)=><StoreListItems content={e} type={type}/>)}
        </>
        )} 
    </StyledBox>
    }
    </div>
  );
}
