import useGeocoder from 'hook/useGeocoder';
import { useEffect, useState } from 'react';
import { useMainstate } from './MainContext';

function Location({ handleOpen }) {
  const [postCode, setPostCode] = useState('');
  const { location } = useMainstate();
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
