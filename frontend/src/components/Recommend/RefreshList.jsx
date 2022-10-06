import { useState } from 'react';
import { useRecommendContext } from './Context/RecommendContext';
import styled from '@emotion/styled';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
  getActivityRecommend,
  getFoodRecommend,
  getMusicRecommend,
} from 'api/recommend';
import { getMusicUris } from 'api/spotify';
import {
  refreshMusicList,
  setCurrentMusic,
  setMusicList,
} from './Context/musicReducer';
import {
  refreshFoodList,
  setCurrentFood,
  setFoodList,
} from './Context/foodReducer';
import {
  refreshActivityList,
  setActivityList,
  setCurrentActivity,
} from './Context/activityReducer';

const reducer = ['musicReducer', 'foodReducer', 'activityReducer'];
const payload = {
  location: JSON.parse(localStorage.getItem('current')),
  distance: localStorage.getItem('range'),
};

const Row = styled('div')`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomLoading = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: white;
  }
`;

export default function RefreshList() {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const { state, dispatch } = useRecommendContext();
  const { index } = state.indexReducer;
  const refresh = state[reducer[index]].refresh;

  const handleClickRefresh = () => {
    if (refresh >= 2) {
      setAlert(true);
      return;
    }

    setLoading(true);

    switch (index) {
      case 0:
        getMusicRecommend(
          refresh + 1,
          async (res) => {
            const uris = await getMusicUris(res.data);
            dispatch(setMusicList(uris));
            dispatch(setCurrentMusic(uris[0]));
            dispatch(refreshMusicList());
            setLoading(false);
          },
          (err) => {
            console.log(err);
            setLoading(false);
          }
        );
        break;
      case 1:
        getFoodRecommend(
          refresh + 1,
          payload,
          (res) => {
            dispatch(setFoodList(res.data));
            dispatch(setCurrentFood(res.data[0]));
            dispatch(refreshFoodList());
            setLoading(false);
          },
          (err) => {
            console.log(err);
            setLoading(false);
          }
        );
        break;
      case 2:
        getActivityRecommend(
          refresh + 1,
          payload,
          (res) => {
            dispatch(setActivityList(res.data));
            dispatch(setCurrentActivity(res.data[0]));
            dispatch(refreshActivityList());
            setLoading(false);
          },
          (err) => {
            console.log(err);
            setLoading(false);
          }
        );
        break;
      default:
        return;
    }
  };

  return (
    <>
      <IconButton onClick={handleClickRefresh}>
        <RefreshIcon />
      </IconButton>
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
          새로고침은 2번까지 할 수 있습니다.
        </Alert>
      </Snackbar>
      {loading && (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#0000007d',
            zIndex: 1200,
          }}
        >
          <Row>
            <Col>
              <CustomLoading color="inherit" />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
