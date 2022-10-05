import React, {useEffect, useState} from 'react';
// import HistoryTitle from "components/History/HistoryTitle";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "styles/HistoryPage/HistoryPage.scss";
import HistoryScroll from 'components/History/HistoryScroll';
import {getUserHistory} from 'api/history'

export default function HistoryPage() {
  const [total, setTotal] = useState()
  useEffect(()=>{
    async function getData(){
      const data = await getUserHistory()
      setTotal(data)
    }
    getData()
  },[])
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
            <Paper className="history__title">
              <div className="history__title--text">내 일정 다시보기</div>
            </Paper>
            {total && <HistoryScroll total={total}/>}
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
};

