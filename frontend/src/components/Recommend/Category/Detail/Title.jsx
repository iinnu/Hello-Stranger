import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MapIcon from '@mui/icons-material/Map';

const Row = styled('div')`
  display: flex;
  justify-content: center;
  font-size: 1.5em;
  font-weight: 700;
`;

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomButton = styled('button')`
  border: none;
  background-color: white;
  padding: 0;
  cursor: pointer;
`;

const CustomLabel = styled('div')`
  font-size: 0.7em;
  font-weight: 400;
  text-align: center;
`;

export default function Title({ title, isList, handleClick, handleClose }) {
  return (
    <div className="category-detail__title">
      <IconButton aria-label="category detail close" onClick={handleClose}>
        <ArrowBackIcon />
      </IconButton>
      <div className="title__inner">
        <div className="title__content">
          <Col>
            <Row>{title}</Row>
          </Col>
          {isList && (
            <CustomButton onClick={handleClick}>
              <MapIcon />
              <CustomLabel>지도</CustomLabel>
            </CustomButton>
          )}
          {!isList && (
            <CustomButton onClick={handleClick}>
              <FormatListBulletedIcon />
              <CustomLabel>목록</CustomLabel>
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
}
