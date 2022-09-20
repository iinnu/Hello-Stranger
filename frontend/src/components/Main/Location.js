import { useEffect, useState } from 'react';
import { useMainState } from './MainContext';
import useGeocoder from 'hook/useGeocoder';

function Location({ handleOpen }) {
  const [postCode, setPostCode] = useState('경북 구미시 3공단3로 302');
  const { location } = useMainState();
  const { coord2Address } = useGeocoder();

  const callback = (result) => {
    const address =
      result[0].road_address?.address_name ?? result[0].address.address_name;
    setPostCode(address);
  };

  useEffect(() => {
    if (location) {
      coord2Address(location, callback);
    }
  }, [location]);

  return (
    <div className="search__location">
      <div className="search__title title--top">검색 기준 위치</div>
      <button className="search__address" onClick={handleOpen}>
        {postCode}
      </button>
    </div>
  );
}

export default Location;
