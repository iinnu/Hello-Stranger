import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function HistoryCard({ id, title, foodTitle, activityTitle, date }) {
  const navigate = useNavigate();
  function openDetail() {
    console.log({ id });
    navigate(`${id}`);
  }

  return (
    <>
      <div className="history__card">
        <Card onClick={openDetail}>
          <CardContent>
            <Typography> {title} </Typography>
            <Typography> {foodTitle} </Typography>
            <Typography> {activityTitle} </Typography>
            <Typography> {date} </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default HistoryCard;
