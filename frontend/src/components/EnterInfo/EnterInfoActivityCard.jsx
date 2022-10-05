import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react';

export default function RecipeReviewCard({ id, title, image }) {
  const [isDisable, setDisable] = useState(false)
  const [isDisable2, setDisable2] = useState(true) 
  function activityDataInputGood(){
    if (!localStorage.activityDataInput){
    const activityDataInput = [
      {
      "category": title,
      "likeYN" : 1
      }
    ]
    localStorage.setItem("activityDataInput", JSON.stringify(activityDataInput))
   }
  else if (localStorage.activityDataInput){
    const existData = JSON.parse(localStorage.getItem("activityDataInput"))
    const activityDataInput = 
      {
      "category": title,
      "likeYN" : 1
      }
      existData.push(activityDataInput)
      localStorage.setItem("activityDataInput", JSON.stringify(existData))
   }
   setDisable(true)
   setDisable2(false)
  }
  

  function activityDataInputBad(){
    if (!localStorage.activityDataInput){
      const activityDataInput = [
        {
        "category": title,
        "likeYN" : -1
        }
      ]
      localStorage.setItem("activityDataInput", JSON.stringify(activityDataInput))
     }
    else if (localStorage.activityDataInput){
      const existData = JSON.parse(localStorage.getItem("activityDataInput"))
      const activityDataInput = 
        {
        "category": title,
        "likeYN" : -1
        }
        existData.push(activityDataInput)
        localStorage.setItem("activityDataInput", JSON.stringify(existData))
     }
    setDisable(true)
    setDisable2(false)
  }

  function newbutton(){
    setDisable(false)
    setDisable2(true)

  }
  return (
    <Card className="UserInput__Activity__Item__Area__Card">
      <div className="UserInput__Music__Item__Area__Card__Newbutton"><Button onClick={newbutton} disabled={isDisable2}><RestartAltIcon/></Button></div>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
      />
      <CardContent>
      </CardContent>
      <div className='Guide__Third__Item__Card__Bottom'>
        <div>
        </div>
        <div>
          <Button onClick={activityDataInputGood} disabled={isDisable}><ThumbUpOffAltIcon/></Button>
          <Button onClick={activityDataInputBad} disabled={isDisable}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
