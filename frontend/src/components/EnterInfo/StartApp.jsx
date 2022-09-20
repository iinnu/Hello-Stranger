import mascot from '../../assets/images/WalkingGirl.gif'
import Button from '@mui/material/Button';
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

const StartApp = () => {
    const handlePrev = () => {
        console.log('이전');
      };

    function handleClick(e) {
        window.location.href ="/main"
    }
    return (
        <div>
            <div className='UserInput__Start__Title'>
                <h2>이제 새로운 하루를</h2>
                <h2>보내러 가볼까요?</h2>
            </div>
            <div className='UserInput__Start__Item'>
                <img className="UserInput__Start__Item__Mascot" src={mascot} alt="Mascot" />
                <Button variant="contained" onClick={handleClick}>메인페이지 ㄱㄱ</Button>
            </div>
            <div className="recommend-bottom">
                <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
                    이전
                </PlainButton>
            </div>
        </div>
    );
};

export default StartApp;