import styled from '@emotion/styled';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useRecommendContext } from './RecommendContext';
import { useNavigate } from 'react-router-dom';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

function PrevNext({ index }) {
  const dispatch = useRecommendContext().dispatch;
  const navigate = useNavigate();

  const handlePrev = () => {
    dispatch({type: 'recommend/index/decrease'})
  };

  const handleNext = () => {
    if(index > 1) navigate('/recommend/result');
    else dispatch({type: 'recommend/index/increase'});
  };

  return (
    <div className="recommend-bottom">
      <PlainButton
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handlePrev}
        sx={{ visibility: index === 0 ? 'hidden' : 'visible' }}
      >
        이전
      </PlainButton>
      <div className="recommend-bottom__page">{index + 1} / 3</div>
      <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
        {index === 2 ? '완료' : '다음'}
      </PlainButton>
    </div>
  );
}

export default PrevNext;
