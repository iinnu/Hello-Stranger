import 'styles/Main/Postcode.scss';
import { useMainDispatch } from '../MainContext';
import useGeocoder from 'hook/useGeocoder';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DaumPostcode from 'react-daum-postcode';


const boxStyle = {
  position: 'relative',
  width: '100%',
  height: 'calc(100% - 40px)',
};

export default function Postcode({ handleClose }) {
  const { addressSearch } = useGeocoder();
  const dispatch = useMainDispatch();

  const callback = (result) => {
    const location = { lat: result[0].y, lng: result[0].x };
    dispatch({ type: 'location', location: location });
  };

  const handleComplete = (data) => {
    const address = data.roadAddress ?? data.jibunAddress;
    addressSearch(address, callback);
    handleClose();
  };

  return (
    <div className="postcode">
      <div className="postcode__header">
        <IconButton aria-label="postcode-close" onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
      </div>
      <DaumPostcode onComplete={handleComplete} style={boxStyle} />
    </div>
  );
}
