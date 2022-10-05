import { useEffect, useMemo, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';
import { current } from '@reduxjs/toolkit';

export default function NearMap({currentStore}) {
  const storeLocationData = Object.values(JSON.parse(localStorage.getItem('storeLocationData')));
  // const storeData = Object.entries(JSON.parse(localStorage.getItem('storeData')));
  const current = JSON.parse(localStorage.getItem('current'))
  const [center, setCenter] = useState({lat: current.lat, lng: current.lng})
  useEffect(()=>{
    async function adjustCenter(){
      if(Object.keys(currentStore) === []){
        setCenter({lat: currentStore.lat,lng: currentStore.lng})
        console.log(currentStore,'가 있어서 center 현재 보고 있는 가게에 맞춤')
      } else {
        setCenter({lat: current.lat, lng: current.lng})
        console.log(currentStore,'가 없어서 center 현재 위치에 맞춤')
    }
    }
    adjustCenter()
  },[currentStore])
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
      const openCurrentStore = (item) => {
        localStorage.setItem('currentStore', JSON.stringify({lat: item.lat, lng: item.lng}))
        // console.log('그래서 바뀜?',localStorage.getItem('currentStore'))
      }
      return (
        <MapMarker
          key={`${item.lat}-${item.lng}`}
          position={pos}
          image={{ src: src, size: size }}
          clickable={true}
          onClick={openCurrentStore}
        />
      );
    });
  }

  return (
    <Map className="detail-info__map" center={center} level={5}>
      {markers}
    </Map>
  );
}
