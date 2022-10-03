import { useState } from 'react';
import { useRecommendContext } from '../../Context/RecommendContext';
import { useResultContext } from '../../Context/ResultContext';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import marker_my from 'assets/images/marker-my.png';
import Menu from '../Menu';
import ResultMarker from './ResultMarker';

export default function ResultMap() {
  const { currentStore, setCurrentStore } = useResultContext();
  const { state } = useRecommendContext();
  const currentPos = JSON.parse(localStorage.getItem('current'));
  const foodStoreList = state.foodReducer.list.map((item) => item.store);
  const activityStoreList = state.activityReducer.list.map(
    (item) => item.store
  );
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(-1);
  const [prePos, setPrePos] = useState();
  const storePos = currentStore
    ? {
        lat: currentStore?.latitude,
        lng: currentStore?.longitude,
      }
    : null;

  const handleClickClose = () => {
    setOpen(false);
    setPrePos(storePos);
    setCurrentStore(null);
  };

  return (
    <>
      <div className="recommend-result-title">
        <div>이런 하루는 어떠세요?</div>
      </div>
      <Menu menu={menu} setMenu={setMenu} />
      <Map
        className="recommend-result-map"
        center={storePos ?? prePos ?? currentPos}
        level={3}
      >
        {menu !== 2 &&
          foodStoreList.map((list) =>
            list.map((store) => (
              <ResultMarker key={store.name} store={store} setOpen={setOpen} />
            ))
          )}
        {menu !== 1 &&
          activityStoreList.map((list) =>
            list.map((store) => (
              <ResultMarker key={store.name} store={store} setOpen={setOpen} />
            ))
          )}
        <MapMarker
          position={currentPos}
          image={{ src: marker_my, size: { width: 35, height: 35 } }}
        />
        {open && (
          <CustomOverlayMap position={storePos}>
            <div className="recommend-result-map__marker">
              <div className="marker__button">
                <button onClick={handleClickClose}>X</button>
              </div>
              <div className="marker__title">{currentStore?.name}</div>
              <div className="marker__address">{currentStore?.address}</div>
            </div>
          </CustomOverlayMap>
        )}
      </Map>
    </>
  );
}
