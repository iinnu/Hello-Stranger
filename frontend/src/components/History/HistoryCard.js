import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';

function HistoryCard() {
  const navigate = useNavigate();
  function openHistory(historyId){
    navigate(`/history/${historyId}`)
  }
  return (
    <>
      <Card sx={{ width: 275 }} onClick={openHistory}>
        <CardContent>
          <Typography> 일정 제목 </Typography>
          <Typography> 음식점, 활동 가게 </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HistoryCard;