import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

const Row = styled('div')`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Inner = styled('div')`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const CustomLoading = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: #92b4ec;
  }
`;

function Loading() {
  return (
    <Row>
      <Col>
        <Inner>
          <CustomLoading />
        </Inner>
        <div>현재 위치 가져오는 중...</div>
      </Col>
    </Row>
  );
}

export default Loading;
