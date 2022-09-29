import React from 'react';
import HistoryTitle from "components/History/HistoryTitle";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Grid from "@mui/material/Grid";
import "styles/HistoryPage/HistoryPage.scss";
import HistoryScroll from 'components/History/HistoryScroll';


export default function HistoryPage() {
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
            <HistoryScroll/>
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
};

