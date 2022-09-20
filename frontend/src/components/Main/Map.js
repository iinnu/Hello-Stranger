import { useEffect, useState } from 'react';
import { useMainDispatch, useMainState } from './MainContext';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Loading from './Loading';

const { kakao, navigator, localStorage } = window;

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const setCurrentLocation = (location) => {
  const current = localStorage.getItem('current');

  if (!current) {
    localStorage.setItem('current', JSON.stringify(location));
  } else {
    const storedLocation = JSON.parse(current);
    if (location.lat !== storedLocation.lat) {
      localStorage.setItem('current', JSON.stringify(location));
    }
  }
};

const Map = () => {
  const [loading, setLoading] = useState(true);
  const { location, range } = useMainState();
  const dispatch = useMainDispatch();

  useEffect(() => {
    const { geolocation } = navigator;
    // 현재 브라우저에서 Geolocation이 정의되지 않은 경우 오류로 처리
    if (!geolocation) {
      console.log('geolocation을 사용할 수 없습니다.');
      return;
    }

    // Geolocation의 getCurrentPosition 메소드에 대한 성공 콜백 핸들러
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      const location = { lat: latitude, lng: longitude };
      dispatch({
        type: 'location',
        location: location,
      });
      setLoading(false);
      setCurrentLocation(location);
    };

    // Geolocation의 getCurrentPosition 메소드에 대한 실패 콜백 핸들러
    const handleError = (error) => {
      console.log(error);
    };

    // Geolocation API 호출
    geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      geolocationOptions
    );
  }, []);

  // 지도 확대 레벨 구하기
  const getLevel = () => {
    switch (range) {
      case 1:
        return 5;
      case 2:
        return 6;
      case 3:
        return 7;
      default:
        return 8;
    }
  };

  useEffect(() => {
    if (!loading) {
      // 지도 그리기
      const container = document.getElementById('map');
      const { lat, lng } = location;
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: getLevel(), // 지도 확대 레벨
      };
      const map = new kakao.maps.Map(container, options);
      // 지도에 마커 생성
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
      // 지도에 검색 범위 표시
      const circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(lat, lng),
        radius: range * 1000,
        strokeWeight: 1.5,
        strokeColor: '#6D8EC2',
        strokeOpacity: 1,
        fillColor: '#92b4ec',
        fillOpacity: 0.3,
      });
      circle.setMap(map);
    }
  }, [location, range]);

  const resetLocation = () => {
    const current = JSON.parse(localStorage.getItem('current'));
    if (current.lat !== location.lat) {
      dispatch({ type: 'location', location: current });
    }
  };

  return (
    <div id="map" className="search__map">
      {loading && <Loading />}
      {!loading && (
        <div className="map__home">
          <IconButton aria-label="search-home" onClick={resetLocation}>
            <HomeIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Map;
