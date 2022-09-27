import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import location from 'assets/images/location-pin.png';
import StoreInfo from './StoreInfo';
import StoreInfoDrawer from './StoreInfoDrawer';

export default function StoreMap() {
  const current = JSON.parse(localStorage.getItem('current'));
  const [open, setOpen] = useState(false);

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
      <Map className="category-store-map__map" center={current} level={3}>
        <MapMarker
          position={current}
          image={{ src: location, size: { width: 40, height: 40 } }}
        />
      </Map>
      <StoreInfo toggleDrawer={toggleDrawer} />
      <StoreInfoDrawer open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
