import mascot from '../../assets/images/guide_first.jpg'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

const EnterInfoGuideFirst = () => { 
  const handleNext = () => {
    console.log('다음');
    window.location.href ="/guide/second"
  };
  return (
    <div>
      <Container>
        <div className="Guide">
          <div className='Guide__First__Title'>
            <h2>시작하기전에,</h2>
            <h2>회원님에 대해</h2>
            <h2 className='Guide__First__Title__Bottom'>조금더 알고 싶어요!</h2>
          </div>
          <div className='Guide__First__Alarm'><ErrorOutlineIcon color="error" fontSize="small"/><p>튜토리얼 입니다!!</p></div>
          <div className='Guide__First__Item'>
            <img className="Guide__First__Item__Mascot" src={mascot} alt="Mascot" />
          </div>
          <div className="recommend-bottom">
            <PlainButton/>
            <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
              다음
            </PlainButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnterInfoGuideFirst;