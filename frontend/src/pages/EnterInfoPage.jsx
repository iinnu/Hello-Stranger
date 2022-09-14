import EnterInfoMusic from '../components/EnterInfo/EnterInfoMusic.jsx'
import EnterInfoFood from '../components/EnterInfo/EnterInfoFood.jsx'
import EnterInfoActivity from '../components/EnterInfo/EnterInfoActivity.jsx'
import StartApp from '../components/EnterInfo/StartApp.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnterInfoPage = () => {
    const settings={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1
    };
    return(
        <div>
            <Slider {...settings}>
                <EnterInfoMusic/>
                <EnterInfoFood/>
                <EnterInfoActivity/>
                <StartApp/>
            </Slider>
        </div>
    );
};

export default EnterInfoPage;