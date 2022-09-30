import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function RecipeReviewCard({ id, title, image }) {
  function foodDataInputGood(){
    if (!localStorage.foodDataInput){
    const foodDataInput = [
      {
      "category": title,
      "likeYN" : "Y"
      }
    ]
    localStorage.setItem("foodDataInput", JSON.stringify(foodDataInput))
   }
  else if (localStorage.foodDataInput){
    const existData = JSON.parse(localStorage.getItem("foodDataInput"))
    const foodDataInput = 
      {
      "category": title,
      "likeYN" : "Y"
      }
      existData.push(foodDataInput)
      localStorage.setItem("foodDataInput", JSON.stringify(existData))
   }
  }
  

  function foodDataInputBad(){
    if (!localStorage.foodDataInput){
      const foodDataInput = [
        {
        "category": title,
        "likeYN" : "N"
        }
      ]
      localStorage.setItem("foodDataInput", JSON.stringify(foodDataInput))
     }
    else if (localStorage.foodDataInput){
      const existData = JSON.parse(localStorage.getItem("foodDataInput"))
      const foodDataInput = 
        {
        "category": title,
        "likeYN" : "N"
        }
        existData.push(foodDataInput)
        localStorage.setItem("foodDataInput", JSON.stringify(existData))
     }
    //  localStorage.setItem("foodDataInput", [])
  }
  return (
    <Card className="UserInput__Food__Item__Area__Card">
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
          hihi
        </div>
        <div>
        <Button onClick={foodDataInputGood}><ThumbUpOffAltIcon/></Button>
        <Button onClick={foodDataInputBad}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
