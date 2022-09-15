import { useState, useEffect } from 'react';

const useCurrentLocation = (options = {}) => {
  // location 저장
  const [location, setLocation] = useState();
  // 에러 메세지 저장
  const [error, setError] = useState();

  // Geolocation의 getCurrentPosition 메소드에 대한 성공 콜백 핸들러
  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({ lat: latitude, lng: longitude });
  };

  // Geolocation의 getCurrentPosition 메소드에 대한 실패 콜백 핸들러
  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = window.navigator;
    // 현재 브라우저에서 Geolocation이 정의되지 않은 경우 오류로 처리
    if (!geolocation) {
      setError('geolocation을 사용할 수 없습니다.');
      return;
    }
    // Geolocation API 호출
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useCurrentLocation;