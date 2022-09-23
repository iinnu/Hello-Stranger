import styled from '@emotion/styled';
import sample from 'assets/images/sample.jpg';

const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function StoreItem() {
  return (
    <div className="store-item">
      <Col>
        <div className="store-item__title">XX 만두가게</div>
        <span className="store-item__address">대구광역시 중구 동인동</span>
      </Col>
      <div className="store-item__img-wrapper">
        <img src={sample} alt="store preview" />
      </div>
    </div>
  );
}
