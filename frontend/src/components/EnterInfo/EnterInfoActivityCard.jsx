import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function RecipeReviewCard({ id, title, image }) {
  function activityDataInputGood(){
    if (!localStorage.activityDataInput){
    const activityDataInput = [
      {
      "category": title,
      "likeYN" : "Y"
      }
    ]
    localStorage.setItem("activityDataInput", JSON.stringify(activityDataInput))
   }
  else if (localStorage.activityDataInput){
    const existData = JSON.parse(localStorage.getItem("activityDataInput"))
    const activityDataInput = 
      {
      "category": title,
      "likeYN" : "Y"
      }
      existData.push(activityDataInput)
      localStorage.setItem("activityDataInput", JSON.stringify(existData))
   }
  }
  

  function activityDataInputBad(){
    if (!localStorage.activityDataInput){
      const activityDataInput = [
        {
        "category": title,
        "likeYN" : "N"
        }
      ]
      localStorage.setItem("activityDataInput", JSON.stringify(activityDataInput))
     }
    else if (localStorage.activityDataInput){
      const existData = JSON.parse(localStorage.getItem("activityDataInput"))
      const activityDataInput = 
        {
        "category": title,
        "likeYN" : "N"
        }
        existData.push(activityDataInput)
        localStorage.setItem("activityDataInput", JSON.stringify(existData))
     }
    //  localStorage.setItem("activityDataInput", [])
  }
  
  return (
    <Card className="UserInput__Activity__Item__Area__Card">
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
          hihi
        </div>
        <div>
          <Button onClick={activityDataInputGood}><ThumbUpOffAltIcon/></Button>
          <Button onClick={activityDataInputBad}><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
