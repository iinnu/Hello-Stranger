import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React, { useState } from 'react';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function RecipeReviewCard({id, name, artist, image}) {
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
        <div>
          {artist}
        </div>
        <div>
        <Button onClick={musicDataInputGood} disabled={isDisable}><ThumbUpOffAltIcon/></Button>
        <Button onClick={musicDataInputBad} disabled={isDisable}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
