import { Button } from '@mui/material';
import styled from '@emotion/styled';

const RecommendButton = styled(Button)`
  background-color: #92b4ec;
  border: none;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%);
  font-weight: 600;

  &.MuiButton-root:hover {
    background-color: #92b4ec;
  }
`;

function Recommend({ children }) {
  return (
    <RecommendButton
      className="search__button"
      variant="contained"
      size="large"
      sx={{ marginTop: '15px' }}
    >
      {children}
    </RecommendButton>
  );
}

export default Recommend;
