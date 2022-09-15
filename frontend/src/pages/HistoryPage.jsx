import React from "react";
import HistoryList from "components/History/HistoryList.jsx";
import BottomNav from 'components/common/BottomNav';
import Container from 'components/common/Container';
import 'styles/HistoryPage/HistoryPage.scss'
const HistoryPage = () => {
  return (
    <>
    <Container>
      <div className="historyPage">
        <h1 className="historyPageTitle">내 일정 다시보기</h1>
        <HistoryList className={"historyList"}/>
        <BottomNav />
      </div>
    </Container>
    </>
  );
};

export default HistoryPage;
