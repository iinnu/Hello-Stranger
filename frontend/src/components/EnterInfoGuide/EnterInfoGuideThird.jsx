import EnterInfoBasicCard from './EnterInfoBasicCard.jsx';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const EnterInfoGuideThird = () => {
  const handlePrev = () => {
    console.log('이전');
    window.location.href = '/guide/second';
  };

  const handleNext = () => {
    console.log('다음');
    window.location.href = '/guide/forth';
  };
  const MusicList = [
    {
      musicID: 1,
      musicName: '300',
      musicArtist: '호미들',
      musicCategory: '',
      musicImgUrl:
        'https://lh3.googleusercontent.com/FDWxQoWg-Cn-swzpQ3vLrG1tnlgEFmZS5GCo_Tp-P8U048PlrdOqBRLKYW987QwE-sJTiH262nGAuiFw=w544-h544-l90-rj',
    },
    {
      musicID: 2,
      musicName: '다시 만날 까봐',
      musicArtist: 'V.O.S',
      musicCategory: '',
      musicImgUrl:
        'https://lh3.googleusercontent.com/Sn57UHTf2gZ8F2ULA16DjU6Y1e7_qfC1Bw7HJ2rzsbrppokz1zN-inzj3n_dsmn15ApaB5u2LFc8Z-xb=w544-h544-l90-rj',
    },
    {
      musicID: 3,
      musicName: '08베이식',
      musicArtist: '베이식',
      musicCategory: '',
      musicImgUrl:
        'https://lh3.googleusercontent.com/kGdxoFrl5jE6vmnfHMQwLUsaMQh_c80un2l-NXOD4tNAYmR30j40aORNyudoa-mxyb0Rokr7m_2RA2K2og=w544-h544-l90-rj',
    },
    {
      musicID: 4,
      musicName: '12시30분',
      musicArtist: '비스트',
      musicCategory: '',
      musicImgUrl:
        'https://lh3.googleusercontent.com/sTqTQ3utWODRcH_zbiRNbc9-pgvdgfAjVu4j-NV_Unb_OuIEScpG77hajQnDZO41IQRilD0T10azl7IB=w544-h544-l90-rj',
    },
    {
      musicID: 5,
      musicName: '가솔린',
      musicArtist: '키',
      musicCategory: '',
      musicImgUrl:
        'https://lh3.googleusercontent.com/WPdtmsU1-KxK8WcNwPpRrzO_mC6hE7Mc7UHBJwNy6ayoROXRmjLg7-8rvlOh_2fN3Mg_aPXPkOv_7vIG=w544-h544-l90-rj',
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const EnterInfoBasicCards = MusicList.map((e) => (
    <EnterInfoBasicCard
      key={e.musicID}
      id={e.musicID}
      artist={e.musicArtist}
      name={e.musicName}
      image={e.musicImgUrl}
    />
  ));
  return (
    <div>
      <Container>
        <div className="Guide">
          <div className="Guide__Third__Title">
            <h2>취향에 따라</h2>
            <h2>좋아요, 싫어요를</h2>
            <h2 className="Guide__Third__Title__Bottom">눌러주세요.</h2>
          </div>
          <div className="Guide__First__Alarm">
            <ErrorOutlineIcon color="error" fontSize="small" />
            <p>서비스 가이드라인</p>
          </div>
          <div className="Guide__Third__Item">
            <div className="Guide__Third__Item__Card">
              <Slider {...settings}>{EnterInfoBasicCards}</Slider>
            </div>
            <div className="Guide__Third__Item__Uparrow">
              <ArrowUpwardIcon />
            </div>
            <div>선호도에 따라 버튼을 눌러주세요!</div>
          </div>
          <div className="recommend-bottom">
            <PlainButton
              startIcon={<ArrowBackIosNewIcon />}
              onClick={handlePrev}
            >
              이전
            </PlainButton>
            <PlainButton endIcon={<ArrowForwardIosIcon />} onClick={handleNext}>
              다음
            </PlainButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EnterInfoGuideThird;
