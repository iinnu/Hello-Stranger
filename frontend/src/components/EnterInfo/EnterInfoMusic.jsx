import EnterInfoMusicCard from './EnterInfoMusicCard.jsx'
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from '@emotion/styled';
import Container from 'components/common/Container';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import axios from "axios";
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
  // #######################################################################################################################
// const [musicid, setmusicid] = useState('')
// useEffect(()=>{
//   async function getData(){
//     const data = await searchAxios()
//     setmusicid(`spotify:track:${data.trackId}`)
//   }
//   getData()
// },[JSON.parse(MusicList).musicName, JSON.parse(MusicList).musicArtist])
//   const accessToken = localStorage.getItem('spotify')
//   const [currentMusic, setCurrentMusic] = useState(false)
//   const trackList = []
//   const trackIdList = []
//   function searchAxios() {
//       return axios
//         .get("https://api.spotify.com/v1/search", {
//           params: {
//             q: artist + ' ' + name,
//             type: "track",
//             limit: "1", //가장 정확한 1개만 가져오게 1로 리밋 정함
//           },
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         })
//         .then((res) => {
//           console.log("inside searchAxios", res.data);
//           const trackId = res.data.tracks.items[0].id;
//           const artistId = res.data.tracks.items[0].artists[0].id;
//           return { trackId, artistId };
//         })
//         .catch((err) => console.log(err) );
//     }

//   trackIdList.map((e)=>{
//   searchAxios(e)
//   })
//   function handleCallback(){
//   const currentMusicLink = document.querySelector('div.rswp__active > a > img')
//   if(currentMusicLink){
//       setCurrentMusic(currentMusicLink.getAttribute('alt'))
//       console.log('alt',currentMusicLink.getAttribute('alt'))
//   } else return;
//   }

// #########################################################################################################3

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
            {/* <SpotifyPlayer
        token={accessToken}
        uris={musicid}
        callback={handleCallback}
        /> */}
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