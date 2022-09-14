import React from "react";
import HistoryCard from "components/History/HistoryCard.jsx";
const HistoryList = ({className}) => {
  return (
    <>
      <div className={className}>
      <HistoryCard />
      </div>
    </>
  );
};

export default HistoryList;
