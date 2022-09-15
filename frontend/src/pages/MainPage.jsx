import { Grid } from '@mui/material';
import BottomNav from 'components/common/BottomNav';
import Container from 'components/common/Container';
import Map from 'components/Main/Map';
import Location from 'components/Main/Location';
import Range from 'components/Main/Range';
import 'styles/MainPage/MainPage.scss';
import { MainProvider } from 'components/Main/MainContext';
import Recommend from 'components/Main/Recommend';

function MainPage() {
  return (
    <Container>
      <MainProvider>
        <Map />
        <div className="search">
          <Grid
            container
            className="search-inner"
            direction="column"
            justifyContent="center"
          >
            <Location />
            <Range />
            <Recommend />
          </Grid>
        </div>
        <BottomNav />
      </MainProvider>
    </Container>
  );
}

export default MainPage;
