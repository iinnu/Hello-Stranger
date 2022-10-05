import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

const PlainButton = styled(Button)`
  &.MuiButton-root {
    color: black;
    &:hover {
      background-color: white;
    }
  }
`;
const settings={
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow:1,
  slidesToScroll: 1,
};


const EnterInfo = () => {  
  const MusicList = localStorage.getItem("userInputInfoMusic");
  const handleNext = () => {
    console.log('다음');
    window.location.href ="/info/food"
    localStorage.removeItem('musicarr')
  };
  const [musicarr, setmusicarr] = useState([])
  const parentFunction = (e) => {
    setmusicarr(e)
    console.log(musicarr)
    console.log('hello')
  };
  const EnterInfoMusicCards = JSON.parse(MusicList).map((e) => (
    <div className='UserInput__Activity__Item__Area'>
      <EnterInfoMusicCard
        key={e.musicId}
        id={e.musicId}
        artist={e.musicArtist}
        name={e.musicName}
        image={e.musicImgUrl}
        musicplayer={parentFunction}
      />
    </div>
  ));
  const accessToken = localStorage.getItem('spotify')
  const [currentMusic, setCurrentMusic] = useState(false)
  function handleCallback(){
    const currentMusicLink = document.querySelector('div.rswp__active > a > img')
    if(currentMusicLink){
      setCurrentMusic(currentMusicLink.getAttribute('alt'))
      console.log('alt',currentMusicLink.getAttribute('alt'))
    } else return;
  }
  return (
    <div>
      <Container>
        <div className="UserInput">
          <div className='UserInput__Music__Title'>
            <h2>어떤 음악을</h2>
            <h2 className='UserInput__Music__Title__Bottom'>자주 들으시나요?</h2>
            <div className="UserInput__Music__Player">
              5곡을 듣고 아래에 평가해주세요!
            <SpotifyPlayer
              token={accessToken}
              uris={musicarr}
              callback={handleCallback}
            />
          </div>
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