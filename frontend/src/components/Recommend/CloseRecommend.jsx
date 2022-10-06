import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomModal from 'components/common/CustomModal';
import RefreshList from './RefreshList';

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          BorderBottom: '1px solid gray',
        }}
      >
        <IconButton onClick={() => setOpen(true)}>
          <CloseIcon />
        </IconButton>
        <RefreshList />
      </div>
      <CustomModal
        open={open}
        handleConfirm={handleConfirm}
        handleCancle={handleCancle}
      >
        추천을 그만 두시겠습니까?
      </CustomModal>
    </>
  );
}

export default CloseRecommend;
