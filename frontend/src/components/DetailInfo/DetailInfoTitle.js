import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from '@emotion/styled';

const ExitButton = styled(Button)`
  background-color: none;
  border: none;
  box-shadow: 0;
  font-weight: 600;
  color: black;
  &.MuiButton-root:hover {
   background-color: none;
 }
`;

function DetailInfoTitle({historyInfo, handleOpen}) {
 function goBack() {
  navigate(-1);
 }
 const navigate = useNavigate();
 return (
  <>
  <ExitButton onClick={goBack}>X</ExitButton>
  <h1>{historyInfo.title}</h1>
  <div className="detail-info__date">{historyInfo.date}</div>
  <Button onClick={handleOpen}>일정 평가</Button>
  </> 
 );
}

export default DetailInfoTitle;

