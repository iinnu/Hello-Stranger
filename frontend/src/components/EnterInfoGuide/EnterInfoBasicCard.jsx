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
  const [isDisable1, setDisable1] = useState(false)
  const [isDisable2, setDisable2] = useState(false) 
  
  function DataInputGood(){
    setDisable1(true)
    setDisable2(false)
  }
    
  function DataInputBad(){
    setDisable1(false)
    setDisable2(true)
  }
  return (
    <Card className='Guide__Third__Item__Card'>
      <CardHeader
        title={name}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="musicImg"
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
      {isDisable1? <Button onClick={DataInputGood} color="primary" variant="contained"><ThumbUpOffAltIcon/></Button>:<Button onClick={DataInputGood} color="primary"><ThumbUpOffAltIcon/></Button> }
      {isDisable2? <Button onClick={DataInputBad} color="primary" variant="contained"><ThumbDownOffAltIcon/></Button>:<Button onClick={DataInputBad} color="primary"><ThumbDownOffAltIcon/></Button>}

        </div>
      </div>
    </Card>
  );
}
