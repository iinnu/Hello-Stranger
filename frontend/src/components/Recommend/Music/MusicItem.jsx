import { useState } from 'react';
import { useRecommendContext } from '../Context/RecommendContext';
import {
  setCurrentMusic,
  setMusicChoice,
  setRecommendCurrent,
} from '../Context/musicReducer';
import { Alert, IconButton, Snackbar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import classNames from 'classnames';
import styled from '@emotion/styled';

const CustomIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    &:hover {
      background-color: unset;
    }

    & .MuiTouchRipple-root {
      opacity: 0;
    }
  }
`;

function MusicItem({ active, item, result }) {
  const [alert, setAlert] = useState(false);
  const [like, setLike] = useState(item.choiceYN === 1 ? true : false);
  const [dislike, setDislike] = useState(item.choiceYN === 2 ? true : false);
  const { state, dispatch } = useRecommendContext();
  const { list } = state.musicReducer;
  const actionCreator = result ? setRecommendCurrent : setCurrentMusic;

  const handleClickItem = () => {
    dispatch(actionCreator(item));
  };

  const handleLike = () => {
    // 좋아요 취소
    if (like) {
      dispatch(setMusicChoice(item.musicID, 0));
      setLike(false);
    }
    // 좋아요 할 때
    else {
      const likeCnt = list.filter((item) => item.choiceYN === 1);
      // 좋아요가 이미 1개 이상이면
      if (likeCnt.length > 0) {
        setAlert(true);
        // 좋아요가 1개 미만이면
      } else {
        if (dislike) setDislike(false);
        dispatch(setMusicChoice(item.musicID, 1));
        setLike(true);
      }
    }
  };

  const handleDislike = () => {
    if (like) setLike(false);
    if (dislike) dispatch(setMusicChoice(item.musicID, 0));
    else dispatch(setMusicChoice(item.musicID, 2));
    setDislike(!dislike);
  };

  return (
    <div
      className={
        active ? classNames('music-item', 'music-item--active') : 'music-item'
      }
      onClick={handleClickItem}
    >
      <div className="list__item">
        <div className="item__title">{item.musicName}</div>
        <div className="item__artist">{item.musicArtist}</div>
      </div>
      {!result && (
        <>
          <div className="item__like">
            <CustomIconButton
              onClick={(e) => {
                if (e.stopPropagation) e.stopPropagation();
                e.cancelable = true;
                handleLike();
              }}
            >
              {!like && <ThumbUpOffAltIcon />}
              {like && <ThumbUpAltIcon />}
            </CustomIconButton>
            <CustomIconButton
              onClick={(e) => {
                if (e.stopPropagation) e.stopPropagation();
                e.cancelable = true;
                handleDislike();
              }}
            >
              {!dislike && <ThumbDownOffAltIcon />}
              {dislike && <ThumbDownAltIcon />}
            </CustomIconButton>
          </div>
        </>
      )}
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
          좋아요는 하나만 가능합니다.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MusicItem;
