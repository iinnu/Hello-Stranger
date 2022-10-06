import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import React, { useState } from 'react';

export default function RecipeReviewCard({ id, title, image, Disable, Count  }) {
  const [isDisable, setDisable] = useState(false) 
  const [isDisable2, setDisable2] = useState(true) 
  function foodDataInputGood(){
    if (!localStorage.foodDataInput){
    const foodDataInput = [
      {
      "category": title,
      "likeYN" : 1
      }
    ]
    localStorage.setItem("foodDataInput", JSON.stringify(foodDataInput))
   }
  else if (localStorage.foodDataInput){
    const existData = JSON.parse(localStorage.getItem("foodDataInput"))
    const foodDataInput = 
      {
      "category": title,
      "likeYN" : 1
      }
      existData.push(foodDataInput)
      localStorage.setItem("foodDataInput", JSON.stringify(existData))
   }
   Disable(false)
   setDisable(true)
   setDisable2(false)
  }
  

  function foodDataInputBad(){
    if (!localStorage.foodDataInput){
      const foodDataInput = [
        {
        "category": title,
        "likeYN" : -1
        }
      ]
      localStorage.setItem("foodDataInput", JSON.stringify(foodDataInput))
     }
    else if (localStorage.foodDataInput){
      const existData = JSON.parse(localStorage.getItem("foodDataInput"))
      const foodDataInput = 
        {
        "category": title,
        "likeYN" : -1
        }
        existData.push(foodDataInput)
        localStorage.setItem("foodDataInput", JSON.stringify(existData))
     }
    //  localStorage.setItem("foodDataInput", [])
    Disable(false)
    setDisable(true)
    setDisable2(false)
  }
  function newbutton(){
    Count(false)
    setDisable(false)
    setDisable2(true)
    const localFoodData = JSON.parse(localStorage.getItem('foodDataInput'))
    for(var i = 0; i < localFoodData.length; i++){ 
      if (localFoodData[i].category === title) { 
        localFoodData.splice(i, 1); 
        i--; 
      }
    }
    localStorage.setItem('foodDataInput', JSON.stringify(localFoodData))
    if(JSON.parse(localStorage.getItem('foodDataInput')).length===0){
      localStorage.removeItem('foodDataInput')
    }
  }
  return (
    <Card className="UserInput__Food__Item__Area__Card">
      <div className="UserInput__Music__Item__Area__Card__Newbutton"><Button onClick={newbutton} disabled={isDisable2}><RestartAltIcon/></Button></div>
      <CardHeader
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <div className='Guide__Third__Item__Card__Bottom'>
        <div>
        </div>
        <div>
        <Button onClick={foodDataInputGood} disabled={isDisable}><ThumbUpOffAltIcon/></Button>
        <Button onClick={foodDataInputBad} disabled={isDisable}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
