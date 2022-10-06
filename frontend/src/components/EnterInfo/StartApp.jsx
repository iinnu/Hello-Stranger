import mascot from '../../assets/images/WalkingGirl.gif'
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import { getApiInstance } from 'api';
import CustomButton from 'components/common/CustomButton';

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
    window.location.href ="/info/activity"
  };

  function handleClick(e) {
    const userChoice = {}
    userChoice.music=JSON.parse(localStorage.getItem("musicDataInput"))
    userChoice.food=JSON.parse(localStorage.getItem("foodDataInput"))
    userChoice.activity=JSON.parse(localStorage.getItem("activityDataInput"))
    userChoice.userEmail=localStorage.getItem("email")
    localStorage.removeItem("musicDataInput") 
    localStorage.removeItem("foodDataInput") 
    localStorage.removeItem("activityDataInput") 
    localStorage.removeItem("email")
    localStorage.removeItem("userInputInfoActivity")
    localStorage.removeItem("userInputInfoFood")
    localStorage.removeItem("userInputInfoMusic")
    console.log(userChoice)
    const start = getApiInstance();
    start.post('/user/choice', userChoice)
    .then(
      console.log("hi"),
      window.location.replace('/main')
    )
    .catch(err =>{console.log(err)})
  }
  return (
    <div>
      <Container>
        <div className="UserInput">
          <div className='UserInput__Start__Title'>
            <h2>이제 새로운 하루를</h2>
            <h2 className='UserInput__Start__Title__Bottom'>보내러 가볼까요?</h2>
          </div>
          <div className='UserInput__Start__Item'>
            <img className="UserInput__Start__Item__Mascot" src={mascot} alt="Mascot" />
            <CustomButton className="StartButton" variant="contained" onClick={handleClick}>
              <div>메인페이지</div>
            </CustomButton>
          </div>
          <div className="recommend-bottom">
            <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
              이전
            </PlainButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StartApp;
