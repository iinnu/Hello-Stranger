import EnterInfoFoodCard from './EnterInfoFoodCard.jsx'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';

const PlainButton = styled(Button)
`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfo = () => {
  const FoodList = localStorage.getItem("userInputInfoFood");
  const settings={
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,     
  };
  const handlePrev = () => {
    console.log('이전');
    window.location.href ="/info/music"
  };
    
  const handleNext = () => {
    console.log('다음');
    window.location.href ="/info/activity"
  };
  const [isDisable, setDisable] = useState(true)
  const [count, setcount] = useState(1)
  const parentFunction = (e) => {
    setcount(count+1)
    if (count >= 1) {
      setDisable(false)
    }
    console.log(count)
  };
  const EnterInfoFoodCards = JSON.parse(FoodList).map((e) => (
    <div className='UserInput__Activity__Item__Area'>
      <EnterInfoFoodCard
        key={e.id}
        id={e.id}
        title={e.foodCategory}
        image={e.foodImgUrl}
        Disable={parentFunction}
      />
    </div>
  ));
  return (
    <div>
      <Container>
        <div className="UserInput">
          <div className='UserInput__Food__Title'>
            <h2>어떤 음식을</h2>
            <h2 className='UserInput__Food__Title__Bottom'>자주 드시나요?</h2>
          </div>
          <div className='UserInput__Food__Item'>
            <Slider {...settings}>
              {EnterInfoFoodCards}
            </Slider>
          </div>
          <div className="info-bottom">
          <Button startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>이전</Button>
          <div className="info-bottom__comment">하나이상 평가시 활성화 됩니다. → </div>
          <Button endIcon={<ArrowForwardIosIcon />} onClick={handleNext} disabled={isDisable}>다음</Button>
            {/* <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
              이전
            </PlainButton>
            <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
              다음
            </PlainButton> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnterInfo;