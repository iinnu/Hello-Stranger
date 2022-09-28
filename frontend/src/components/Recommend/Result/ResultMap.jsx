import { Map } from 'react-kakao-maps-sdk';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

export default function ResultMap() {
  const currentPos = JSON.parse(localStorage.getItem('current'));

  return (
    <>
      <div className="recommend-result-title">
        <div>이런 하루는 어떠세요?</div>
      </div>
      <LeftMenu />
      <RightMenu />
      <Map className="recommend-result-map" center={currentPos} level={3}></Map>
    </>
  );
}
