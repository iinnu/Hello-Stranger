import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
function HistoryCard({ data }) {
  const navigate = useNavigate();
  function openDetail() {
    navigate(`${data.reviewId}`, { state: { canEvaluate } });
  }
  const [canEvaluate, setCanEvaluate] = useState(false);
  const year = data?.regDate.slice(0, 4);
  const month = data?.regDate.slice(5, 7);
  const day = data?.regDate.slice(8, 10);
  const date = new Date();
  const thisYear = String(date.getFullYear());
  const thisMonth = String(date.getMonth() + 1);
  const thisDay = String(date.getDate());
  useEffect(() => {
    let cardDate = new Date(year, month, day);
    cardDate.setDate(cardDate.getDate() + 2);
    let thisDate = new Date(thisYear, thisMonth, thisDay);

    if (thisDate > cardDate) {
      setCanEvaluate(false);
    } else if (data.evalYN === 'Y') {
      setCanEvaluate(false);
    } else {
      setCanEvaluate(true);
    }
  }, []);

  return (
    <div className="history__card" onClick={openDetail}>
      {/* <Card onClick={openDetail} style={{backgroundColor: canEvaluate ? 'white' : '#92B4EC' }}>
          <CardContent>
            <Typography variant="h5" fontWeight="1000"> {data.title} </Typography>
            <Typography variant="h6"> {data.foodCategoryName} </Typography>
            <Typography variant="h6"> {data.activityCategoryName} </Typography>
            <Typography> {year}년 {month}월 {day}일</Typography>
          </CardContent>
        </Card> */}
      <div className="history__card__content">
        <div className="history__card--date">
          {year}년 {month}월 {day}일
        </div>
        <div className="history__card--title">{data.title}</div>
        <div className="history__card--plan">
          {data.foodCategoryName} - {data.activityCategoryName}
        </div>
      </div>
      <div
        className={
          canEvaluate
            ? 'history__card__evaluate--Y'
            : 'history__card__evaluate--N'
        }
      ></div>
    </div>
  );
}

export default HistoryCard;
