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
  color: gray;
`;

export default function NoResult() {
  return (
    <Row>
      <Col>가게 목록이 존재하지 않습니다.</Col>
    </Row>
  );
}
