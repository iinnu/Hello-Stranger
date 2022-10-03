import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
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
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <CloseIcon />
      </IconButton>
      <CustomModal
        open={open}
        handleConfirm={handleConfirm}
        handleCancle={handleCancle}
      >
        추천을 그만 두시겠습니까?
      </CustomModal>
    </div>
  );
}

export default CloseRecommend;
