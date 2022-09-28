import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const CustomSnackbar = styled(Snackbar)`
  &.MuiSnackbar-root {
    cursor: pointer;
  }
`;

function HistoryAlert({ open = false, handleClose }) {
  const navigate = useNavigate();

  return (
    <CustomSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      onClick={() => navigate('/history')}
    >
      <Alert
        severity="warning"
        sx={{ width: '100%' }}
        icon={<ErrorOutlineIcon />}
      >
        저번 일정은 어떠셨나요?
      </Alert>
    </CustomSnackbar>
  );
}

export default HistoryAlert;
