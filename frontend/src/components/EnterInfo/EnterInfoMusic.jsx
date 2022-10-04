import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const MusicList = localStorage.getItem("userInputInfoMusic");
const settings={
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
  // nextArrow: (
  //     <NextArrow />
  //   ),
  //   prevArrow: (
  //     <PrevArrow />
  //   ),
};
const EnterInfo = () => {  
      const handleNext = () => {
        console.log('다음');
        window.location.href ="/info/food"
      };
      const EnterInfoMusicCards = JSON.parse(MusicList).map((e) => (
        <div className='UserInput__Activity__Item__Area'>
        <EnterInfoMusicCard
          key={e.musicId}
          id={e.musicId}
          artist={e.musicArtist}
          name={e.musicName}
          image={e.musicImgUrl}
        />
        </div>
      ));
    return (
      <div>
      <Container>
        <div className="UserInput">
            <div className='UserInput__Music__Title'>
                <h2>어떤 음악을</h2>
                <h2 className='UserInput__Music__Title__Bottom'>자주 들으시나요?</h2>
            </div>
              <div className='UserInput__Music__Item'>
                <Slider {...settings}>
                    {EnterInfoMusicCards}
                </Slider>
              </div>
              <div className="recommend-bottom">
                <PlainButton/>
                <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
                    다음
                </PlainButton>
              </div>
            </div>
          </Container>
        </div>
    );
};

export default EnterInfo;