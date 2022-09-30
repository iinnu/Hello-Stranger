import { Map, MapMarker } from 'react-kakao-maps-sdk';
import marker_my from 'assets/images/marker-my.png';
import Menu from './Menu';

export default function ResultMap() {
  const currentPos = JSON.parse(localStorage.getItem('current'));

  return (
    <>
      <div className="recommend-result-title">
        <div>이런 하루는 어떠세요?</div>
      </div>
      <Menu />
      <Map className="recommend-result-map" center={currentPos} level={3}>
        <MapMarker
          position={currentPos}
          image={{ src: marker_my, size: { width: 35, height: 35 } }}
        />
      </Map>
    </>
  );
}
