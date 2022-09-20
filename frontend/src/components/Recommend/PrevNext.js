import styled from '@emotion/styled';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

function PrevNext() {
  const handlePrev = () => {
    console.log('이전');
  };

  const handleNext = () => {
    console.log('다음');
  };

  return (
    <div className="recommend-bottom">
      <PlainButton startIcon={<ArrowBackIosNewIcon />} onClick={handlePrev}>
        이전
      </PlainButton>
      <div className="recommend-bottom__page">1 / 3</div>
      <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
        다음
      </PlainButton>
    </div>
  );
}

export default PrevNext;
