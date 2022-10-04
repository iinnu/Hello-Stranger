import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';
import { current } from '@reduxjs/toolkit';

export default function DetailInfoMap({currentStore}) {
  const storeLocationData = Object.values(JSON.parse(localStorage.getItem('storeLocationData')));
  const storeData = Object.entries(JSON.parse(localStorage.getItem('storeData')));
  // const storeLocationData = () => {
  //   const localStorageLocation = localStorage.getItem('storeLocationData')
  //   return localStorageLocation
  //   ? Object.values(JSON.parse(localStorage.getItem('storeLocationData')))
  //   : null
  // }
  // const storeData = () => {
  //   const localStorageStore = localStorage.getItem('storeLocationData')
  //   return localStorageStore
  //   ? Object.values(JSON.parse(localStorage.getItem('storeLocationData')))
  //   : null
  // }
  const center = {
    lat: (storeLocationData[0].lat + storeLocationData[1].lat) / 2,
    lng: (storeLocationData[0].lng + storeLocationData[1].lng) / 2
  }
  const markers = useMemo(
    () => getMarkers(storeLocationData, currentStore),
    [storeLocationData, currentStore]
  );
  function getMarkers(list) {
    console.log('getMarkers', list)
    console.log('currentStore', currentStore)
    return list.map((item) => {
      const pos = { lat: item.lat, lng: item.lng };
      const src = (currentStore.lat === item.lat && currentStore.lng === item.lng) 
        ? marker_active 
        : marker;
      const size = (currentStore.lat === item.lat && currentStore.lng === item.lng) 
        ? { width: 45, height: 45 }
        : { width: 32, height: 32 }

      return (
        <MapMarker
          key={`${item.lat}-${item.lng}`}
          position={pos}
          image={{ src: src, size: size }}
          clickable={true}
        />
      );
    });
  }
  return (
    <Map className="detail-info__map" center={center} level={3}>
      {markers}
    </Map>
  );
}
