import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  boxShadow: 3,
  p: 4,
  borderRadius: 2,
};

export default function CustomModal({ open, handleConfirm, handleCancle }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCancle}
        aria-labelledby="modal-custom-title"
        aria-describedby="modal-custom-description"
      >
        <Box sx={style}>
          추천을 그만 두시겠습니까?
          <div>
            <Button variant="contained" onClick={handleConfirm}>
              확인
            </Button>
            <Button variant="outlined" onClick={handleCancle}>
              취소
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
