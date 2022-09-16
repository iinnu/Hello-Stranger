import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ExitButton = styled(IconButton)`
  background-color: none;
  border: none;
  box-shadow: 0;
  width: 1em;
  &.MuiButtonBase-root:hover {
    background-color: white;
    width: 1em;
  }
`;

function DetailInfoTitle({ historyInfo, handleOpen }) {
  function goBack() {
    navigate(-1);
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="detail-info__title">
        <ExitButton aria-label="exit from current page" onClick={goBack}>
          <ArrowBackIcon />
        </ExitButton>
        <h1>{historyInfo.title}</h1>
        <div className="detail-info__date">{historyInfo.date}</div>
      </div>
    </>
  );
}

export default DetailInfoTitle;
