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


export default function RecipeReviewCard() {
  const [isDisable, setDisable] = useState(false)
  const [isDisable2, setDisable2] = useState(true) 
  const playlist =
    {
      musicID: 1,
      musicName: '가장 보통의 존재',
      musicArtist: '언니네 이발관',
      musicCategory: '',
      musicImgUrl:
        'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/066/039/122/66039122_1395715494760_1_600x600.JPG/dims/resize/Q_80,0',
    };
    function newbutton(){
      setDisable(false)
      setDisable2(true)
    }
    function DataInputGood(){
     setDisable(true)
     setDisable2(false)
    }
    
  
    function DataInputBad(){
      setDisable(true)
      setDisable2(false)
    }
  return (
    <Card className='Guide__Third__Item__Card'>
      <div className="UserInput__Music__Item__Area__Card__Newbutton"><Button onClick={newbutton} disabled={isDisable2}><RestartAltIcon/></Button></div>
      <CardHeader
        title={playlist.musicName}
      />
      <CardMedia
        component="img"
        height="194"
        image={playlist.musicImgUrl}
        alt="musicImg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <div className='Guide__Third__Item__Card__Bottom'>
        <div>
          {playlist.musicArtist}
        </div>
        <div>
        <Button onClick={DataInputGood} disabled={isDisable}><ThumbUpOffAltIcon/></Button>
        <Button onClick={DataInputBad} disabled={isDisable}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
