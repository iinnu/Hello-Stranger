import HistoryCard from "components/History/HistoryCard.js";
function HistoryList({className}) {
  return (
    <>
      <div className={className}>
      <HistoryCard />
      </div>
    </>
  );
};

export default HistoryList;
