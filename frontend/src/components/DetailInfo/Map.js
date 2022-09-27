import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import location from 'assets/images/location-pin.png';

export default function DetailInfoMap({placeList}) {
  const current = JSON.parse(localStorage.getItem('current'));
  const [open, setOpen] = useState(false);

  return (
    <Map className="detail-info__map" center={current} level={3}>
      <MapMarker
        position={current}
        image={{ src: location, size: { width: 40, height: 40 } }}
      />
    </Map>
  );
}
