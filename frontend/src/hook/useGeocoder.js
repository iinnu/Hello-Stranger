const { kakao } = window;

const useGeocoder = () => {
  const geocoder = new kakao.maps.services.Geocoder();

  const coord2Address = (coord, callback) => {
    const kakaoCoord = new kakao.maps.LatLng(coord.lat, coord.lng);
    geocoder.coord2Address(
      kakaoCoord.getLng(),
      kakaoCoord.getLat(),
      (result, status) => {
        if (status === kakao.maps.services.Status.OK) {
          callback(result);
        }
      }
    );
  };

  const addressSearch = (address, callback) => {
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        callback(result);
      }
    });
  };

  return { coord2Address, addressSearch };
};

export default useGeocoder;
