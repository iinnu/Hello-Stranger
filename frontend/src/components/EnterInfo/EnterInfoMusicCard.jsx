import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React, { useState, useEffect } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import axios from "axios";
import SpotifyPlayer from 'react-spotify-web-playback';


export default function RecipeReviewCard({id, name, artist, image, musicplayer}) {
  const [isDisable, setDisable] = useState(false)
  const [isDisable2, setDisable2] = useState(true) 
  function musicDataInputGood(){
    if (!localStorage.musicDataInput){
    const musicDataInput = [
      {
      "id": id,
      "likeYN" : 1
      }
    ]
    localStorage.setItem("musicDataInput", JSON.stringify(musicDataInput))
   }
  else if (localStorage.musicDataInput){
    const existData = JSON.parse(localStorage.getItem("musicDataInput"))
    const musicDataInput = 
      {
      "id": id,
      "likeYN" : 1
      }
      existData.push(musicDataInput)
      localStorage.setItem("musicDataInput", JSON.stringify(existData))
   }
   setDisable(true)
   setDisable2(false)
  }
  

  function musicDataInputBad(){
    if (!localStorage.musicDataInput){
      const musicDataInput = [
        {
        "id": id,
        "likeYN" : -1
        }
      ]
      localStorage.setItem("musicDataInput", JSON.stringify(musicDataInput))
     }
    else if (localStorage.musicDataInput){
      const existData = JSON.parse(localStorage.getItem("musicDataInput"))
      const musicDataInput = 
        {
        "id": id,
        "likeYN" : -1
        }
        existData.push(musicDataInput)
        localStorage.setItem("musicDataInput", JSON.stringify(existData))
     }
    //  localStorage.setItem("musicDataInput", [])
    setDisable(true)
    setDisable2(false)
  }
  function newbutton(){
    setDisable(false)
    setDisable2(true)
  }




// #############################################################################################################33
// 음악플레이
const [musicarrs, setmusicarrs] = useState([])
useEffect(()=>{
  async function getData(){
    const data = await searchAxios()
    const musicarr = [localStorage.getItem('musicarr')]
    musicarr.push(`spotify:track:${data.trackId}`)
    localStorage.setItem('musicarr', musicarr)
    const musicarrs = localStorage.getItem('musicarr').split(',')
    musicarrs.shift()
    setmusicarrs(musicarrs)
  }
  getData()
},[name, artist])
  const accessToken = localStorage.getItem('spotify')
  const [currentMusic, setCurrentMusic] = useState(false)
  const trackList = []
  const trackIdList = []
  function searchAxios() {
      return axios
        .get("https://api.spotify.com/v1/search", {
          params: {
            q: artist + ' ' + name,
            type: "track",
            limit: "1", //가장 정확한 1개만 가져오게 1로 리밋 정함
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log("inside searchAxios", res.data);
          const trackId = res.data.tracks.items[0].id;
          const artistId = res.data.tracks.items[0].artists[0].id;
          return { trackId, artistId };
        })
        .catch((err) => console.log(err) );
    }

  trackIdList.map((e)=>{
  searchAxios(e)
  })
  function handleCallback(){
  const currentMusicLink = document.querySelector('div.rswp__active > a > img')
  if(currentMusicLink){
      setCurrentMusic(currentMusicLink.getAttribute('alt'))
      console.log('alt',currentMusicLink.getAttribute('alt'))
  } else return;
  }
// #################################################################################################################################
musicplayer(musicarrs)



return (
    <Card className="UserInput__Music__Item__Area__Card"> 
    <div className="UserInput__Music__Item__Area__Card__Newbutton"><Button onClick={newbutton} disabled={isDisable2}><RestartAltIcon/></Button></div>
      <CardHeader 
      className='UserInput__Music__Item__Area__Card__Title'
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="album"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>  
      </CardContent>
      <div className='Guide__Third__Item__Card__Bottom'>
        <div className='Guide__Third__Item__Card__Bottom__Artist'>
          {artist}
        </div>
        <div className='Guide__Third__Item__Card__Bottom__Button'>
        <Button onClick={musicDataInputGood} disabled={isDisable}><ThumbUpOffAltIcon/></Button>
        <Button onClick={musicDataInputBad} disabled={isDisable}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
