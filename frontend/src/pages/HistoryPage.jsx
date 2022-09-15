import React from "react";
import HistoryTitle from "components/History/HistoryTitle";
import HistoryCard from "components/History/HistoryCard.js";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Grid from "@mui/material/Grid";
import "styles/HistoryPage/HistoryPage.scss";
const HistoryPage = () => {
  const cardList = [
    {
      id: 1,
      title: "일정 제목1",
      foodTitle: "음식점1",
      activityTitle: "활동1",
      date: "2022.09.14",
    },
    {
      id: 2,
      title: "일정 제목2",
      foodTitle: "음식점2",
      activityTitle: "활동2",
      date: "2022.09.14",
    },
    {
      id: 3,
      title: "일정 제목3",
      foodTitle: "음식점3",
      activityTitle: "활동3",
      date: "2022.09.14",
    },
    {
      id: 4,
      title: "일정 제목4",
      foodTitle: "음식점4",
      activityTitle: "활동4",
      date: "2022.09.14",
    },
  ];
  const historyCards = cardList.map((e) => (
    <HistoryCard
      key={e.id}
      id={e.id}
      title={e.title}
      foodTitle={e.foodTitle}
      activityTitle={e.activityTitle}
      date={e.date}
    />
  ));
  return (
    <>
      <Container>
        <div className="history">
          <Grid
            container
            className="history-inner"
            direction="row"
            justifyContent="center"
          >
            <HistoryTitle />
            <div className="history__list">
              <ul>{historyCards}</ul>
            </div>
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
};

export default HistoryPage;
