import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ExitButton = styled(IconButton)`
  background-color: none;
  border: none;
  box-shadow: 0;
  width: 1em;
  &.MuiButtonBase-root:hover {
    background-color: transparent;
    width: 1em;
  }
`;

function DetailInfoTitle({ title, date, handleOpenModal }) {
  function goBack() {
    navigate(-1);
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="detail-info__title">
        <div className="detail-info__title--box">
          <Button className="detail-info__title--exit" aria-label="exit from current page" onClick={goBack}>
            <ArrowBackIcon />
          </Button>
          <div className="detail-info__title--align">
            <div className="detail-info__title--text">{title}</div>
            <div className="detail-info__title--date">{date}</div>
          </div>
        </div>
        <Button className="detail-info__title--feedback" variant="contained" onClick={handleOpenModal}>
          일정평가
        </Button>
      </div>
    </>
  );
}

export default DetailInfoTitle;
