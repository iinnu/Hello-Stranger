import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import RateReviewIcon from '@mui/icons-material/RateReview';

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

function DetailInfoTitle({ title, regDate, handleOpenModal, canEvaluate }) {
  function goBack() {
    navigate(-1);
  }
  const navigate = useNavigate();
  return (
    <>
      <div className="detail-info__title">
        <div className="detail-info__title--box">
          <div className="detail-info__title--left">
            <IconButton
              className="detail-info__title--exit"
              aria-label="exit from current page"
              onClick={goBack}
            >
              <ArrowBackIcon />
            </IconButton>
            <div className="detail-info__title--text">{title}</div>
            {/* <div className="detail-info__title--align">
              <div className="detail-info__title--date">{regDate}</div>
            </div> */}
          </div>
          {canEvaluate && (
            <IconButton
              className="detail-info__title--feedback"
              variant="contained"
              onClick={handleOpenModal}
            >
              <RateReviewIcon />
            </IconButton>
          )}
        </div>
      </div>
    </>
  );
}

export default DetailInfoTitle;
