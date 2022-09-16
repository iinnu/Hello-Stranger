import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useMainstate } from './MainContext';

const { kakao } = window;

const Address = styled('button')`
  width: 100%;
  background-color: white;
  padding: 12px 10px;
  cursor: pointer;
  text-align: start;
  color: #666;
  font-size: 0.9em;
  border-radius: 5px;
  border: 1px solid gray;
`;

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
      <Address>{postCode}</Address>
    </div>
  );
}

export default Location;
