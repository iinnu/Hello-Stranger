import styled from '@emotion/styled';
import Alert from '@mui/material/Alert';

const style = {
  maxWidth: 100,
};

const Box = styled('div')`
  padding: 10px;
  position: absolute;
  top: 0;
  z-index: 1300;
  width: 100%;
`;

function HistoryAlert() {
  return (
    <Box>
      <Alert severity="warning" sx={style}>
        저번 일정은 어떠셨나요?
      </Alert>
    </Box>
  );
}

export default HistoryAlert;
