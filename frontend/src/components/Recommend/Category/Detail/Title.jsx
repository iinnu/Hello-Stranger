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

export default function Title({ handleClose }) {
  return (
    <div className="category-detail__title">
      <IconButton aria-label="category detail close" onClick={handleClose}>
        <ArrowBackIcon />
      </IconButton>
      <div className="title__inner">
        <div className="title__content">
          <Col>
            <Row>만두</Row>
          </Col>
          <CustomButton>
            <MapIcon />
            <div
              style={{
                fontSize: '0.5em',
                fontWeight: '400',
                textAlign: 'center',
              }}
            >
              지도
            </div>
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
