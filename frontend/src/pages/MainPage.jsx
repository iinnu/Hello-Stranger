import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Map from "components/MainPage/Map";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import "styles/MainPage/MainPage.scss";

function valuetext(value) {
  return `${value}`;
}

function MainPage() {
  return (
    <Container>
      <Map />
      <div className="search">
        <Grid direction="column">
          <div>검색 범위 지역</div>
          <TextField hiddenlabel size="small" placeholder="구미시" />
          <div>검색 반경</div>
          <Slider
            aria-label="Temperature"
            defaultValue={2}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
          />
        </Grid>
      </div>
      <BottomNav />
    </Container>
  );
}

export default MainPage;
