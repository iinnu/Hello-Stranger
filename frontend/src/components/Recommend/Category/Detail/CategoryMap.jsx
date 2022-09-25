import { useEffect } from 'react';

const { kakao, localStorage } = window;

export default function CategoryMap() {
  useEffect(() => {
    // 지도 그리기
    const container = document.getElementById('map');
    const { lat, lng } = JSON.parse(localStorage.getItem('current'));
    const options = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3, // 지도 확대 레벨
    };
    const map = new kakao.maps.Map(container, options);
    // 지도에 마커 생성
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return <div id="map" className="category-detail__map"></div>;
}
