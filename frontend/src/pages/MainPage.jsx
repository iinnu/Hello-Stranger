import 'styles/Main/MainPage.scss';
import { useEffect, useState } from 'react';
import { MainProvider } from 'components/Main/MainContext';
import { Grid } from '@mui/material';
import BottomNav from 'components/common/BottomNav';
import Container from 'components/common/Container';
import Map from 'components/Main/Map/Map';
import Location from 'components/Main/Search/Location';
import Range from 'components/Main/Search/Range';
import Recommend from 'components/Main/Search/Recommend';
import Postcode from 'components/Main/Search/Postcode';
import HistoryAlert from 'components/Main/HistoryAlert';
import { getApiInstance } from 'api';

function MainPage() {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlertClose = () => {
    setAlert(false);
  };

  useEffect(() => {
    getApiInstance()
      .get('/user/check')
      .then((res) => {
        if (res.data.isNeedEval === 'Y') {
          setAlert(true);
        }
      });
  }, []);

  return (
    <MainProvider>
      <Container>
        <HistoryAlert open={alert} handleClose={handleAlertClose} />
        <Map />
        <div className="search">
          <Grid
            container
            className="search-inner"
            direction="column"
            justifyContent="center"
          >
            <Location handleOpen={handleOpen} />
            <Range />
            <Recommend>추천 시작</Recommend>
          </Grid>
        </div>
        {open && <Postcode handleClose={handleClose} />}
        <BottomNav />
      </Container>
    </MainProvider>
  );
}

export default MainPage;
