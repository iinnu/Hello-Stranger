import mascot from '../../assets/images/WalkingGirl.gif'
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

const EnterInfoGuideSecond = () => {
    const handlePrev = () => {
        console.log('이전');
        window.location.href ="/guide/first"
      };
    
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/guide/third"
      };
    return (
      <div>
      <Container>
      <div className="Guide">
            <div className='Guide__Second__Title'>
                <h2>세가지 카테고리에</h2>
                <h2>대한 선택지를</h2>
                <h2>드릴거에요!!!!</h2>
            </div>
            <div className="Guide__Second__Item">
                <img className="Guide__Second__Item__Mascot" src={mascot} alt="Mascot" />
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

export default EnterInfoGuideSecond;