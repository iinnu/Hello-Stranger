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

export default function RecipeReviewCard({id, name, artist, image, musicplayer, Disable, Count}) {
  const [isDisable1, setDisable1] = useState(false)
  const [isDisable2, setDisable2] = useState(false) 
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
    const localMusicData = JSON.parse(localStorage.getItem('musicDataInput'))
    for(var i = 0; i < localMusicData.length; i++){ 
      if (localMusicData[i].id === id) { 
        localMusicData.splice(i, 1); 
        i--; 
      }
    }
    localStorage.setItem('musicDataInput', JSON.stringify(localMusicData))
    const existData = JSON.parse(localStorage.getItem("musicDataInput"))
    const musicDataInput = 
      {
      "id": id,
      "likeYN" : 1
      }
      existData.push(musicDataInput)
      localStorage.setItem("musicDataInput", JSON.stringify(existData))
   }
   setDisable1(true)
   setDisable2(false)
   Disable(false)
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
      const localMusicData = JSON.parse(localStorage.getItem('musicDataInput'))
      for(var i = 0; i < localMusicData.length; i++){ 
        if (localMusicData[i].id === id) { 
          localMusicData.splice(i, 1); 
          i--; 
        }
      }
      localStorage.setItem('musicDataInput', JSON.stringify(localMusicData))
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
    setDisable1(false)
    setDisable2(true)
    Disable(false)
  }
  

// #############################################################################################################33
// 음악플레이
  const [musicarrs, setmusicarrs] = useState([])
  const [preview, setPreview] =useState('')
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
    },[name, artist]
  )
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
      setPreview(res.data.tracks.items[0].preview_url)
      return { trackId, artistId };
      })
      .catch((err) => console.log(err));
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
      {isDisable1? <Button onClick={musicDataInputGood} color="primary" variant="contained"><ThumbUpOffAltIcon/></Button>:<Button onClick={musicDataInputGood} color="primary"><ThumbUpOffAltIcon/></Button> }
      {isDisable2? <Button onClick={musicDataInputBad} color="primary" variant="contained"><ThumbDownOffAltIcon/></Button>:<Button onClick={musicDataInputBad} color="primary"><ThumbDownOffAltIcon/></Button>}
      </div>
    </div>
  </Card>
);}
