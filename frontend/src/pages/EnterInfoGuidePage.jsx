import EnterInfoGuideFirst from '../components/EnterInfoGuide/EnterInfoGuideFirst.jsx'
import EnterInfoGuideSecond from '../components/EnterInfoGuide/EnterInfoGuideSecond.jsx'
import EnterInfoGuideThird from '../components/EnterInfoGuide/EnterInfoGuideThird.jsx'
import EnterInfoGuideForth from '../components/EnterInfoGuide/EnterInfoGuideForth.jsx'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EnterInfoGuidePage = () => {   
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

