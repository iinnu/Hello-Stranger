import EnterInfoBasicCard from './EnterInfoBasicCard.jsx'
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const EnterInfoGuideThird = () => {
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/guide/second"
      };
    
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/guide/forth"
      };
    return (
      <div>
      <Container>
      <div className="Guide">
            <div className='Guide__Third__Title'>
                <h2>좋아하는 것은 굳버튼,</h2>
                <h2>싫어하는 것은 밷버튼을</h2>
                <h2 className='Guide__Third__Title__Bottom'>눌러주세요.</h2>
            </div>
            <div className='Guide__First__Alarm'><ErrorOutlineIcon color="error" fontSize="small"/><p>튜토리얼 입니다!!</p></div>
            <div className='Guide__Third__Item'>
              <div>버튼을 새로고침 하고 싶으면 리셋 버튼을 누르세요!</div>
              <div className='Guide__Third__Item__Downarrow'><ArrowDownwardIcon/></div>
                <EnterInfoBasicCard/>
              <div className='Guide__Third__Item__Uparrow'><ArrowUpwardIcon/></div>
              <div>선호도에 따라 버튼을 눌러주세요!</div>
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

export default EnterInfoGuideThird;