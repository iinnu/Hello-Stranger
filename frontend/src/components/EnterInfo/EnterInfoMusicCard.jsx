import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


export default function RecipeReviewCard({id, name, artist, image}) {
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
          <Button><ThumbUpOffAltIcon/></Button>
          <Button><ThumbDownOffAltIcon/></Button>
        </div>
      </div>
    </Card>
  );
}
