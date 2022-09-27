import { useMemo, useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import location from 'assets/images/location-pin.png';
import StoreInfo from './StoreInfo';
import StoreInfoDrawer from './StoreInfoDrawer';

function getMarkers(index, list) {
  const lat = index === 1 ? 'foodLatitude' : 'activityLatitude';
  const lng = index === 1 ? 'foodLongitude' : 'activityLongitude';

  return list.map((item) => {
    const pos = { lat: item[lat], lng: item[lng] };

    return (
      <MapMarker
        key={`${item[lat]}-${item[lng]}`}
        position={pos}
        image={{ src: location, size: { width: 30, height: 30 } }}
      />
    );
  });
}

export default function StoreMap({ list }) {
  const currentPos = JSON.parse(localStorage.getItem('current'));
  const [open, setOpen] = useState(false);
  const { index } = useRecommendContext().state.indexReducer;
  const markers = useMemo(() => getMarkers(index, list), [index, list]);

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

  return (
    <div className="category-store-map">
      <Map className="category-store-map__map" center={currentPos} level={3}>
        <MapMarker
          position={currentPos}
          image={{ src: location, size: { width: 40, height: 40 } }}
        />
        {markers}
      </Map>
      <StoreInfo toggleDrawer={toggleDrawer} />
      <StoreInfoDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
