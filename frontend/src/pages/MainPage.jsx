import 'styles/Main/MainPage.scss';
import { useState } from 'react';
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

function MainPage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainProvider>
      <Container>
        <HistoryAlert />
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
