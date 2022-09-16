import { Grid } from '@mui/material';
import BottomNav from 'components/common/BottomNav';
import Container from 'components/common/Container';
import Map from 'components/Main/Map';
import Location from 'components/Main/Location';
import Range from 'components/Main/Range';
import 'styles/MainPage/MainPage.scss';
import { MainProvider } from 'components/Main/MainContext';
import Recommend from 'components/Main/Recommend';
import Postcode from 'components/Main/Postcode';
import { useState } from 'react';

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
