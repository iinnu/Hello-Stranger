import { useResultContext } from '../../Context/ResultContext';
import { MapMarker } from 'react-kakao-maps-sdk';
import marker from 'assets/images/marker.png';
import marker_active from 'assets/images/marker-active.png';

const active_marker = { src: marker_active, size: { width: 50, height: 50 } };
const plain_marker = { src: marker, size: { width: 40, height: 40 } };

export default function ResultMarker({ store, setOpen }) {
  const { currentStore, setCurrentStore } = useResultContext();
  const position = { lat: store.latitude, lng: store.longitude };

  const handleClickMarker = () => {
    setOpen(true);
    setCurrentStore(store);
  };

  return (
    <MapMarker
      key={`${store.latitude}-${store.longitude}`}
      position={position}
      image={currentStore?.name === store.name ? active_marker : plain_marker}
      onClick={handleClickMarker}
    />
  );
}
