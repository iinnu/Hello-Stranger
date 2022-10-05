import { useMemo, useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { setCurrentStore as activityStore } from 'components/Recommend/Context/activityReducer';
import { setCurrentStore as foodStore } from 'components/Recommend/Context/foodReducer';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import StoreInfo from './StoreInfo';
import StoreInfoDrawer from './StoreInfoDrawer';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';
import marker_my from 'assets/images/marker-my.png';

export default function StoreMap({ list }) {
  const currentPos = JSON.parse(localStorage.getItem('current'));
  const [open, setOpen] = useState(false);
  const { index } = useRecommendContext().state.indexReducer;
  const type = useMemo(() => (index === 1 ? 'food' : 'activity'), [index]);
  const { store } = useRecommendContext().state[type + 'Reducer'];
  const { dispatch } = useRecommendContext();
  const markers = useMemo(() => getMarkers(list, store), [list, store]);

  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(state);
  };

  function handleClickMarker(item) {
    const actionCreator = index === 1 ? foodStore : activityStore;
    dispatch(actionCreator(item));
  }

  function getMarkers(list, store) {
    return list.map((item) => {
      const pos = { lat: item.latitude, lng: item.longitude };
      const src = store?.id === item.id ? marker_active : marker;
      const size =
        store?.id === item.id
          ? { width: 45, height: 45 }
          : { width: 32, height: 32 };

      return (
        <MapMarker
          key={item.id}
          position={pos}
          image={{ src: src, size: size }}
          clickable={true}
          onClick={() => handleClickMarker(item)}
        />
      );
    });
  }

  return (
    <div className="category-store-map">
      <Map
        className="category-store-map__map"
        center={
          store
            ? {
                lat: store.latitude,
                lng: store.longitude,
              }
            : currentPos
        }
        level={3}
      >
        <MapMarker
          position={currentPos}
          image={{ src: marker_my, size: { width: 35, height: 35 } }}
        />
        {markers}
      </Map>
      {store && <StoreInfo store={store} toggleDrawer={toggleDrawer} />}
      {store && (
        <StoreInfoDrawer
          open={open}
          store={store}
          toggleDrawer={toggleDrawer}
        />
      )}
    </div>
  );
}
