import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function HistoryCard({ data }) {
  const navigate = useNavigate();
  function openDetail() {
    console.log(data.reviewId);
    navigate(`${data.reviewId}`);
  }

  return (
    <>
      <div className="history__card">
        <Card onClick={openDetail}>
          <CardContent>
            <Typography> {data.title} </Typography>
            <Typography> {data.foodCategory} </Typography>
            <Typography> {data.activityCategory} </Typography>
            <Typography> {data.regDate} </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default HistoryCard;
