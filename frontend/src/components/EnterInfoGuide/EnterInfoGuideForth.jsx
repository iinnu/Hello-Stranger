import Button from '@mui/material/Button';
import mascot from '../../assets/images/guide_forth.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import axios from "axios";

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfoGuideForth = () => {
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/guide/third"
      };
    function handleClick(e) {
      const userInputInfo = {}
      axios({
        url: 'https://j7d104.p.ssafy.io:8081/api/user/choice',
        method:'get',
        })
        .then(res=>{
          userInputInfo.food=res.data.food
          userInputInfo.activity=res.data.activity
          userInputInfo.music=res.data.music
          console.log(res)
          localStorage.setItem("userInputInfoFood", JSON.stringify(userInputInfo.food))
          localStorage.setItem("userInputInfoActivity", JSON.stringify(userInputInfo.activity))
          localStorage.setItem("userInputInfoMusic", JSON.stringify(userInputInfo.music))
          window.location.href ="/info/music"
        })
        .catch(err=>{
            console.log(err)
            // window.location.href ="/guide/first" //일단 다음으로 넘어가려고 해놓음
        })
    }
    return (
        <div>
        <Container>
        <div className="Guide">
            <div className='Guide__Forth__Title'>
                <h2>회원님의 취향을 고려해서</h2>
                <h2>새로운 일상을</h2>
                <h2 className='Guide__Forth__Title__Bottom'>제공해드릴게요!</h2>
            </div>
            <div className="Guide__Forth__Item">
                <img className="Guide__Forth__Item__Mascot" src={mascot} alt="Mascot" />
                <Button variant="contained" onClick={handleClick}>취향 조사 ㄱㄱ</Button>            </div>
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

export default EnterInfoGuideForth;