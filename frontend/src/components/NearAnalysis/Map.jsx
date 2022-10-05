import { useEffect, useMemo, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';
import { current } from '@reduxjs/toolkit';

export default function NearMap({currentStore, markerData}) {
  const current = JSON.parse(localStorage.getItem('current'))
  const [center, setCenter] = useState({lat: current.lat, lng: current.lng})
  const [clickedStore, setClickedStore] = useState({})
  const [open, setOpen] = useState(false)
  const [summary, setSummary] = useState({})
  useEffect(()=>{
    async function adjustCenter(){
      if(Object.keys(currentStore) === []){
        setCenter({lat: currentStore.lat,lng: currentStore.lng})
      } else {
        setCenter({lat: current.lat, lng: current.lng})
    }
    }
    adjustCenter()
  },[currentStore])
  const markers = useMemo(
    () => {
      return getMarkers(markerData, clickedStore)},
    [markerData, clickedStore]
  );
  function getMarkers(markerData, currentStore) {
    const arrayMarkerData = Object.values(markerData)
    return arrayMarkerData?.map((item) => {
      const pos = { lat: item.lat, lng: item.lng };
      const src = (currentStore.lat === item.lat && currentStore.lng === item.lng) 
        ? marker_active 
        : marker;
      const size = (currentStore.lat === item.lat && currentStore.lng === item.lng) 
        ? { width: 45, height: 45 }
        : { width: 32, height: 32 }
      const clickHandler = (e) => {
        localStorage.setItem('currentStore', JSON.stringify({lat: item?.lat, lng: item?.lng}))
        setClickedStore({lat: item?.lat, lng: item?.lng})
        setCenter({lat: item?.lat, lng: item?.lng})
        setOpen(true)
        const storeData = JSON.parse(localStorage.getItem('storeData'))
          storeData?.food.forEach((e)=>{
          if(e.latitude === item.lat && e.longitude === item.lng){
            setSummary(e)
          }
        })
        storeData?.activity.forEach((e)=>{
          if(e.latitude === item.lat && e.longitude === item.lng){
            setSummary(e)
          }
        })
      }
      return (
        <MapMarker
          key={`${item.lat}-${item.lng}`}
          position={pos}
          image={{ src: src, size: size }}
          clickable={true}
          onClick={(e)=>clickHandler(e)}
        />
      );
    });
  }
  const handleClickClose = () => {
    setOpen(false);
    setClickedStore({})
  };
  return (
    <Map className="detail-info__map" center={center} level={5}>
      {markers}
      {open && <CustomOverlayMap position={clickedStore}>
          <div className="recommend-result-map__marker">
            <div className="marker__button">
                <button onClick={handleClickClose}>X</button>
            </div>
            <div className="marker__title">{summary?.name}</div>
            <div className="marker__address">{summary?.address}</div>
          </div>
      </CustomOverlayMap>}
    </Map>
  );
}
