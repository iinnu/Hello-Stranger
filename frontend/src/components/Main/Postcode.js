import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DaumPostcode from 'react-daum-postcode';
import 'styles/MainPage/Postcode.scss';

const boxStyle = {
  position: 'relative',
  width: '100%',
  height: 'calc(100% - 40px)',
};

export default function Postcode({ handleClose }) {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress);
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
