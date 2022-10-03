import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



export default function RecipeReviewCard() {
  const playlist =
    {
      musicID: 1,
      musicName: '가장 보통의 존재',
      musicArtist: '언니네 이발관',
      musicCategory: '',
      musicImgUrl:
        'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/066/039/122/66039122_1395715494760_1_600x600.JPG/dims/resize/Q_80,0',
    };

  return (
    <Card className='Guide__Third__Item__Card'>
      <CardHeader
        title={playlist.musicName}
        subheader={playlist.musicArtist}
      />
      <CardMedia
        component="img"
        height="194"
        image={playlist.musicImgUrl}
        alt="musicImg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
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
