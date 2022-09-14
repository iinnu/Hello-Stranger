import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import mascot from '../../assets/images/WalkingGirl.gif'
import Button from '@mui/material/Button';

const StartApp = () => {
    function handleClick(e) {
        window.location.href ="/main"
    }
    return (
        <div>
            <div>
                <h1>이제 새로운 하루를</h1>
                <h1>보내러 가볼까요?</h1>
            </div>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={mascot}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                    </Typography>
                </CardContent>
    
            </Card>
            <Button variant="contained" onClick={handleClick}>메인페이지 ㄱㄱ</Button>
        </div>
    );
};

export default StartApp;