import React from "react";
import HistoryList from "components/History/HistoryList.jsx";
import NavBar from "components/common/NavBar.jsx";
import 'styles/HistoryPage.css'
const HistoryPage = () => {
  return (
    <>
    <div className="historyPage">
      <h1 className="historyPageTitle">내 일정 다시보기</h1>
      <HistoryList className={"historyList"}/>
      <NavBar />
    </div>
    </>
  );
};

export default HistoryPage;
