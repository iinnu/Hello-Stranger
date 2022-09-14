import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Map from "components/MainPage/Map";
import "styles/MainPage/MainPage.scss";

function MainPage() {
  return (
    <Container>
      <Map/>
      <BottomNav />
    </Container>
  );
}

export default MainPage;
