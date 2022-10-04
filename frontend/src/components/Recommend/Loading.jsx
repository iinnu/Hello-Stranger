import { useEffect } from 'react';
import styled from '@emotion/styled';
import Walking from 'assets/images/WalkingGirl.gif';

const Row = styled('div')`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TitleBox = styled('div')`
  font-size: 1.8em;
  font-weight: 900;
  margin-bottom: 50px;
`;

export default function Loading() {
  return (
    <Row>
      <Col>
        <TitleBox>
          추천을 목록을 <br />
          가져오는 중입니다...
        </TitleBox>
        <img src={Walking} alt="loading" width={220} />
      </Col>
    </Row>
  );
}
