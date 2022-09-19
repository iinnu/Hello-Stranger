import 'styles/common/CustomModal.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomButton from './CustomButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  boxShadow: 3,
  p: 4,
  borderRadius: 2,
};

export default function CustomModal({
  children,
  open,
  handleConfirm,
  handleCancle,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleCancle}
        aria-labelledby="modal-custom-title"
        aria-describedby="modal-custom-description"
      >
        <Box className="modal" sx={style}>
          <div className="modal__content">{children}</div>
          <div className="modal__button">
            <CustomButton className="button__confirm" variant="contained" onClick={handleConfirm}>
              확인
            </CustomButton>
            <CustomButton variant="outlined" onClick={handleCancle}>
              취소
            </CustomButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
