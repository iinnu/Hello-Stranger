import EnterInfoGuideFirst from '../components/EnterInfoGuide/EnterInfoGuideFirst.jsx'
import EnterInfoGuideSecond from '../components/EnterInfoGuide/EnterInfoGuideSecond.jsx'
import EnterInfoGuideThird from '../components/EnterInfoGuide/EnterInfoGuideThird.jsx'
import EnterInfoGuideForth from '../components/EnterInfoGuide/EnterInfoGuideForth.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnterInfoGuidePage = () => {   
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
                <EnterInfoGuideFirst/>
                <EnterInfoGuideSecond/>
                <EnterInfoGuideThird/>
                <EnterInfoGuideForth/>
            </Slider>
        </div>
    );
};

export default EnterInfoGuidePage;

