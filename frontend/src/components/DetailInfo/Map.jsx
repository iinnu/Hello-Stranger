import { useEffect, useMemo, useState } from 'react';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';
import { current } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import marker_my from 'assets/images/marker-my.png';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';

export default function DetailInfoMap({currentStore, markerData, pathName}) {
  console.log('DetailInfoMap 바로 아래 markerData', markerData)
  const foodData = JSON.parse(localStorage.getItem('storeData')).choice_food
  const activityData = JSON.parse(localStorage.getItem('storeData')).choice_activity
  const current = JSON.parse(localStorage.getItem('current'))
  const [center, setCenter] = useState({lat: current.lat, lng: current.lng})
  const [clickedStore, setClickedStore] = useState({})
  const [open, setOpen] = useState(false)
  const [summary, setSummary] = useState({})
  useEffect(()=>{
    async function adjustCenter(){
      if(pathName === 'history'){
        if(Object.keys(currentStore) === []){
          setCenter({lat: currentStore.lat,lng: currentStore.lng})
          console.log(currentStore,'가 있어서 center 현재 보고 있는 가게에 맞춤')
        } else {
          setCenter({
            lat: (foodData.latitude + activityData.latitude)/2, 
            lng: (foodData.longitude + activityData.longitude)/2
          })
          console.log(currentStore,'가 없어서 음식가게, 활동가게 중간 위치에 맞춤')
        }
      }  
    }
    adjustCenter()
  },[currentStore])

  useEffect(()=>{
    if(pathName === 'other'){
      console.log('markerData가 왜 안온다고', markerData)
      const latitude = (markerData?.activity?.lat + markerData?.food?.lat) / 2
      const longitude = (markerData?.activity?.lng + markerData?.food?.lng) / 2
      setCenter({lat: latitude, lng: longitude})
    }
  },[markerData])
  const markers = useMemo(
    () => {
      console.log('clickedStore updated',markerData, clickedStore )
      return getMarkers(markerData, clickedStore)},
    [markerData, clickedStore]
  );
  function getMarkers(markerData, currentStore) {
    const arrayMarkerData = Object.values(markerData)
    return arrayMarkerData?.map((item) => {
      const pos = { lat: item.lat, lng: item.lng };
      const isFoodLocation = (foodData?.latitude === item.lat) && (foodData?.longitude === item.lng)
      const isActivityLocation = (activityData?.latitude === item.lat) && (activityData?.longitude === item.lng)
      const src = (isFoodLocation || isActivityLocation) ? marker_my
        : ((currentStore.lat === item.lat && currentStore.lng === item.lng) 
          ? marker_active 
          : marker
        );
      const size = (currentStore.lat === item.lat && currentStore.lng === item.lng) 
        ? { width: 45, height: 45 }
        : { width: 32, height: 32 }
      const clickHandler = (e) => {
        localStorage.setItem('currentStore', JSON.stringify({lat: item?.lat, lng: item?.lng}))
        setClickedStore({lat: item?.lat, lng: item?.lng})
        setCenter({lat: item?.lat, lng: item?.lng})
        console.log('itemInfo', item, isFoodLocation, isActivityLocation)
        setOpen(true)
        const storeData = JSON.parse(localStorage.getItem('storeData'))
        if(pathName ==='history'){
          storeData?.activity.forEach((e)=>{
            if(e.latitude === item.lat && e.longitude === item.lng){
              setSummary(e)
            }
          })
          storeData?.food.forEach((e)=>{
            if(e.latitude === item.lat && e.longitude === item.lng){
              setSummary(e)
            }
          })
          if(storeData?.choice_food.latitude === item.lat && storeData?.choice_food.longitude === item.lng){
            setSummary(storeData?.choice_food)
          }
          if(storeData.choice_activity.latitude === item.lat && storeData.choice_activity.longitude === item.lng){
            setSummary(storeData?.choice_activity)
          }
        } else if (pathName === 'other'){
          if(storeData?.food.latitude === item.lat && storeData?.food.longitude === item.lng){
            setSummary(storeData?.food)
          }
          if(storeData?.activity.latitude === item.lat && storeData?.activity.longitude === item.lng){
            setSummary(storeData?.activity)
          }
        }
        console.log('summary', summary)
      }

      return (
        <>
        <MapMarker
          key={`${item.lat}-${item.lng}`}
          position={pos}
          image={{ src: src, size: size }}
          clickable={true}
          onClick={(e)=>{clickHandler(e)}}
          />

        </>
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

