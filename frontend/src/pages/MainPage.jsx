import { Button, Grid } from "@mui/material";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Map from "components/MainPage/Map";
import SearchLocation from "components/MainPage/SearchLocation";
import SearchRange from "components/MainPage/SearchRange";
import "styles/MainPage/MainPage.scss";

function MainPage() {
  return (
    <Container>
      <Map />
      <div className="search">
        <Grid container className="search-inner" direction="column" justifyContent="center">
          <SearchLocation />
          <SearchRange />
          <Button variant="contained" size="large">추천 시작</Button>
        </Grid>
      </div>
      <BottomNav />
    </Container>
  );
}

export default MainPage;
