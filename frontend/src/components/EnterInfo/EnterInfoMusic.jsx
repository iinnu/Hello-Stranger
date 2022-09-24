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
const MusicList = [
  {
    musicID: 1,
    musicName: '가장 보통의 존재',
    musicArtist: '언니네 이발관',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/066/039/122/66039122_1395715494760_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 2,
    musicName: '정말 사랑했을까',
    musicArtist: '브라운아이드소울',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/027/251/15027251_1388739020483_1_600x600.JPG/dims/resize/Q_80,0',
  },
  {
    musicID: 3,
    musicName: 'starlight',
    musicArtist: 'Muse',
    musicCategory: '',
    musicImgUrl:
      'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/040/585/421/40585421_1393312393347_1_600x600.JPG/dims/resize/Q_80,0',
  },
];
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
      const EnterInfoMusicCards = MusicList.map((e) => (
        <div className='UserInput__Activity__Item__Area'>
        <EnterInfoMusicCard
          key={e.id}
          id={e.id}
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
                <h2>자주 들으시나요?</h2>
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