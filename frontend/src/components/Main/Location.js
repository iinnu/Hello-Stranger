import { useEffect, useState } from 'react';
import { useMainstate } from './MainContext';

const { kakao } = window;

function Location() {
  const { location } = useMainstate();
  const [postCode, setPostCode] = useState('');

  useEffect(() => {
    if (location) {
      const geocoder = new kakao.maps.services.Geocoder();
      const coord = new kakao.maps.LatLng(location.lat, location.lng);
      const callback = (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          // 도로명 주소가 없으면 지번 주소로 설정
          const address =
            result[0].road_address.address_name ??
            result[0].address.address_name;
          setPostCode(address);
        }
      };
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }
  }, [location]);

  return (
    <div className="search__location">
      <div className="search__title title--top">검색 기준 위치</div>
      <button className="search__address">{postCode}</button>
    </div>
  );
}

export default Location;
