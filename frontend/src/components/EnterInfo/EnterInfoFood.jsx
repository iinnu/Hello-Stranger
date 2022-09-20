import EnterInfoFoodCard from './EnterInfoFoodCard.jsx'
import mascot from '../../assets/images/WalkingGirl.gif'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfo = () => {
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/info/music"
      };
    
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/activity"
      };
    return (
        <div>
            <div className='UserInput__Food__Title'>
                <h2>어떤 음식을</h2>
                <h2>자주 드시나요?</h2>
            </div>
            <div className='UserInput__Food__Item'>
                {/* <EnterInfoFoodCard/> */}
                <img className="UserInput__Food__Item__Mascot" src={mascot} alt="Mascot" />
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
    );
};

export default EnterInfo;