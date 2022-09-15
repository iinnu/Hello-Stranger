import { useEffect, useState } from 'react';
import Loading from './Loading';

const { kakao, navigator } = window;

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

const Map = () => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { geolocation } = navigator;
    // 현재 브라우저에서 Geolocation이 정의되지 않은 경우 오류로 처리
    if (!geolocation) {
      setError('geolocation을 사용할 수 없습니다.');
      return;
    }

    // Geolocation의 getCurrentPosition 메소드에 대한 성공 콜백 핸들러
    const handleSuccess = (pos) => {
      const { latitude, longitude } = pos.coords;
      setLocation({ lat: latitude, lng: longitude });
      setLoading(false);
    };

    // Geolocation의 getCurrentPosition 메소드에 대한 실패 콜백 핸들러
    const handleError = (error) => {
      setError(error.message);
    };

    // Geolocation API 호출
    geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      geolocationOptions
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      const container = document.getElementById('map');
      const { lat, lng } = location;
      const options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 3, // 지도 확대 레벨
      };
      const map = new kakao.maps.Map(container, options);
      const markerPosition = new kakao.maps.LatLng(lat, lng);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [location]);

  return (
    <div id="map" className="search__map">
      {loading && <Loading />}
    </div>
  );
};

export default Map;
