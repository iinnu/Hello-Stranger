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
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
    const settings={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
        nextArrow: (
            <NextArrow />
          ),
          prevArrow: (
            <PrevArrow />
          ),
    };
    return(
        <div>
          <Container>
            <Slider {...settings}>
                <EnterInfoMusic/>
                <EnterInfoFood/>
                <EnterInfoActivity/>
                <StartApp/>
            </Slider>
          </Container>
        </div>
    );
};

export default EnterInfoPage;