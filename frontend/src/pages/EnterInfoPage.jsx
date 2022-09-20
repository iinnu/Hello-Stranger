import EnterInfoMusic from '../components/EnterInfo/EnterInfoMusic.jsx'
import EnterInfoFood from '../components/EnterInfo/EnterInfoFood.jsx'
import EnterInfoActivity from '../components/EnterInfo/EnterInfoActivity.jsx'
import StartApp from '../components/EnterInfo/StartApp.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'styles/EnterInfoPage/EnterInfoPage.scss';
import Container from 'components/common/Container';

const EnterInfoPage = () => {
    return(
        <div>
          <Container>
            <div className="UserInput">
              <EnterInfoMusic className="UserInput__Music"/>
              <EnterInfoFood className="UserInput__Food"/>
              <EnterInfoActivity className="UserInput__Activity"/>
              <StartApp className="UserInput__Start"/>
            </div>
          </Container>
        </div>
    );
};

export default EnterInfoPage;