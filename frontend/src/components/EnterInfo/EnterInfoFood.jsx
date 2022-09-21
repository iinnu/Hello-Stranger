import EnterInfoFoodCard from './EnterInfoFoodCard.jsx'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfo = () => {
    const FoodList = [
        {
          id: 1,
          foodTitle: "꼬치구이",
          foodUrl: 'https://cdn.pixabay.com/photo/2015/08/06/15/30/grill-878001__340.jpg'
        },
        {
          id: 2,
          foodTitle: "오징어",
          foodUrl: 'https://cdn.pixabay.com/photo/2018/05/24/02/53/fried-squid-3425707__340.jpg'
        },
        {
          id: 3,
          foodTitle: "돼지고기구이",
          foodUrl: 'https://cdn.pixabay.com/photo/2015/11/20/08/17/meat-1052571__340.jpg'
        },
        {
          id: 4,
          foodTitle: "고등어요리",
          foodUrl: 'https://media.istockphoto.com/photos/sandwich-with-mackerel-fish-cucumber-and-mustard-black-background-top-picture-id1292943746?b=1&k=20&m=1292943746&s=170667a&w=0&h=rQbaNuDK2kNMWeGV8TUJDvWfpNqtjtuvv-WRMAbG-gs='
        },
      ];
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/info/music"
      };
    
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/activity"
      };
      const EnterInfoFoodCards = FoodList.map((e) => (
        <EnterInfoFoodCard
          key={e.id}
          id={e.id}
          title={e.foodTitle}
          image={e.foodUrl}
        />
      ));
    return (
      <div>
      <Container>
        <div className="UserInput">
            <div className='UserInput__Food__Title'>
                <h2>어떤 음식을</h2>
                <h2>자주 드시나요?</h2>
            </div>
            <div className='UserInput__Food__Item'>
                {EnterInfoFoodCards}
            </div>
            <div className="recommend-bottom">
                <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
                    이전
                </PlainButton>
                <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                    다음
                </PlainButton>
            </div>
            </div>
          </Container>
        </div>
    );
};

export default EnterInfo;