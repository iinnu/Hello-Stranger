import { useState } from 'react';
import { useRecommendContext } from '../Context/RecommendContext';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';
import marker_my from 'assets/images/marker-my.png';
import Menu from './Menu';

export default function ResultMap() {
  const [menu, setMenu] = useState(-1);
  const currentPos = JSON.parse(localStorage.getItem('current'));
  const { state } = useRecommendContext();
  const foodStoreList = state.foodReducer.list.map((item) => item.store);
  const activityStoreList = state.activityReducer.list.map(
    (item) => item.store
  );

  return (
    <>
      <div className="recommend-result-title">
        <div>이런 하루는 어떠세요?</div>
      </div>
      <Menu menu={menu} setMenu={setMenu} />
      <Map className="recommend-result-map" center={currentPos} level={3}>
        {menu !== 2 &&
          foodStoreList.map((list) =>
            list.map((store) => (
              <MapMarker
                key={`${store.latitude}-${store.longitude}`}
                position={{ lat: store.latitude, lng: store.longitude }}
                image={{ src: marker, size: { width: 40, height: 40 } }}
              />
            ))
          )}
        {menu !== 1 &&
          activityStoreList.map((list) =>
            list.map((store) => (
              <MapMarker
                key={`${store.latitude}-${store.longitude}`}
                position={{ lat: store.latitude, lng: store.longitude }}
                image={{ src: marker, size: { width: 40, height: 40 } }}
              />
            ))
          )}
        <MapMarker
          position={currentPos}
          image={{ src: marker_my, size: { width: 35, height: 35 } }}
        />
      </Map>
    </>
  );
}
