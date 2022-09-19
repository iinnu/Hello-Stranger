import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomModal from 'components/common/CustomModal';

function CloseRecommend() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate('/main');
  };

  const handleCancle = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <IconButton onClick={() => setOpen(true)}>
          <CloseIcon />
        </IconButton>
      </div>
      <CustomModal
        open={open}
        handleConfirm={handleConfirm}
        handleCancle={handleCancle}
      />
    </>
  );
}

export default CloseRecommend;
