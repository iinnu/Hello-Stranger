import useCurrentLocation from 'hook/useCurrentLocation';
import React, { useEffect } from 'react';

const { kakao } = window;

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
}

const Map = () => {
  const { location, error } = useCurrentLocation(geolocationOptions);
  console.log(location);

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(
        37.365264512305174,
        127.10676860117488
      ),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return <div id="map" className="search__map"></div>;
};

export default Map;
