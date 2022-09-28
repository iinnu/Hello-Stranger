import styled from '@emotion/styled';
import Walking from 'assets/images/WalkingGirl.gif';
import { useEffect } from 'react';

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

export default function ResultLoading({ handleLoading }) {
  useEffect(() => {
    setTimeout(() => {
      handleLoading();
    }, 3000);
  }, []);

  return (
    <Row>
      <Col>
        <TitleBox>
          새로운 하루가 <br />
          도착했습니다!
        </TitleBox>
        <img src={Walking} alt="loading" width={220} />
      </Col>
    </Row>
  );
}
