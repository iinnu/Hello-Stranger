import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';

export default function DetailInfoMap({placeList}) {
  const current = JSON.parse(localStorage.getItem('current'));
  const [open, setOpen] = useState(false);

  return (
    <Map className="detail-info__map" center={current} level={3}>
      <MapMarker
        position={current}
        image={{ src: marker, size: { width: 40, height: 40 } }}
      />
    </Map>
  );
}
