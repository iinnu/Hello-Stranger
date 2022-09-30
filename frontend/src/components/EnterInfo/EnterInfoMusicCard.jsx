import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function RecipeReviewCard({id, name, artist, image}) {
  function musicDataInputGood(){
    if (!localStorage.musicDataInput){
    const musicDataInput = [
      {
      "id": id,
      "likeYN" : "Y"
      }
    ]
    localStorage.setItem("musicDataInput", JSON.stringify(musicDataInput))
   }
  else if (localStorage.musicDataInput){
    const existData = JSON.parse(localStorage.getItem("musicDataInput"))
    const musicDataInput = 
      {
      "id": id,
      "likeYN" : "Y"
      }
      existData.push(musicDataInput)
      localStorage.setItem("musicDataInput", JSON.stringify(existData))
   }
  }
  

  function musicDataInputBad(){
    if (!localStorage.musicDataInput){
      const musicDataInput = [
        {
        "id": id,
        "likeYN" : "N"
        }
      ]
      localStorage.setItem("musicDataInput", JSON.stringify(musicDataInput))
     }
    else if (localStorage.musicDataInput){
      const existData = JSON.parse(localStorage.getItem("musicDataInput"))
      const musicDataInput = 
        {
        "id": id,
        "likeYN" : "N"
        }
        existData.push(musicDataInput)
        localStorage.setItem("musicDataInput", JSON.stringify(existData))
     }
    //  localStorage.setItem("musicDataInput", [])
  }
  return (
    <Card className="UserInput__Music__Item__Area__Card">
      <CardHeader
        title={name}
        subheader={artist}
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
          hihi
        </div>
        <div>
        <Button onClick={musicDataInputGood}><ThumbUpOffAltIcon/></Button>
        <Button onClick={musicDataInputBad}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
