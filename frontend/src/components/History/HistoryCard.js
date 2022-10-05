import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react'
function HistoryCard({ data }) {
  const navigate = useNavigate();
  function openDetail() {
    navigate(`${data.reviewId}`);
  }
  const [canEvaluate, setCanEvaluate] = useState(false)
  useEffect(()=>{
    const today = new Date()
    //날짜 비교하는 작업 한 번 들어가야 함
    if(data.evalYN==='Y'){
      setCanEvaluate(true)
    }
  },[])
  return (
    <>
      <div className="history__card">
        <Card onClick={openDetail} style={{backgroundColor: canEvaluate ? 'white' : '#92B4EC' }}>
          <CardContent>
            <Typography> {data.title} </Typography>
            <Typography> {data.foodCategoryName} </Typography>
            <Typography> {data.activityCategoryName} </Typography>
            <Typography> {data.regDate} </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default HistoryCard;
