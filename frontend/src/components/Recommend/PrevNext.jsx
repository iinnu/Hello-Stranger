import styled from '@emotion/styled';
import { useState } from 'react';
import { Alert, Button, Snackbar } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRecommendContext } from './Context/RecommendContext';
import { useNavigate } from 'react-router-dom';
import { decreaseIndex, increaseIndex } from './Context/indexReducer';
import { saveRecommendResult } from 'api/recommend';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;

function PrevNext({ index }) {
  const { state, dispatch } = useRecommendContext();
  const { activityReducer, foodReducer, musicReducer } = state;
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handlePrev = () => {
    dispatch(decreaseIndex());
  };

  const handleNext = () => {
    if (index > 1) {
      const activity = activityReducer.list.filter(
        (item) => item.choiceYN !== 0
      );
      const food = foodReducer.list.filter((item) => item.choiceYN !== 0);
      const music = musicReducer.list.filter((item) => item.choiceYN !== 0);
      const email = localStorage.getItem('email');

      const payload = {
        activity: activity.map((item) => ({
          category: item.activityCategory,
          likeYN: item.choiceYN === 2 ? -1 : 1,
        })),
        food: food.map((item) => ({
          category: item.foodCategory,
          likeYN: item.choiceYN === 2 ? -1 : 1,
        })),
        music: music.map((item) => ({
          id: item.musicID,
          likeYN: item.choiceYN === 2 ? -1 : 1,
        })),
        userEmail: email,
      };

      saveRecommendResult(
        payload,
        (res) => {
          navigate('/recommend/result');
        },
        (err) => {
          console.log(err);
          alert('추천 결과를 전송에 실패했습니다.');
        }
      );
    } else {
      if (index === 0) {
        const likeCnt = musicReducer.list.filter((item) => item.choiceYN === 1);
        if (likeCnt.length === 0) setAlert(true);
        else dispatch(increaseIndex());
      } else dispatch(increaseIndex());
    }
  };

  return (
    <>
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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={1500}
        open={alert}
        onClose={() => setAlert(false)}
      >
        <Alert
          severity="error"
          sx={{ width: '100%' }}
          icon={<ErrorOutlineIcon />}
        >
          음악 좋아요를 한 가지 해주세요!
        </Alert>
      </Snackbar>
    </>
  );
}

export default PrevNext;
