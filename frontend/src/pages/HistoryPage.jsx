import React from "react";
import HistoryList from "components/History/HistoryList.jsx";
import NavBar from "components/common/NavBar.jsx";
const HistoryPage = () => {
  return (
    <>
      <h1>내 일정 다시보기</h1>
      <HistoryList />
      <NavBar />
    </>
  );
};

export default HistoryPage;
