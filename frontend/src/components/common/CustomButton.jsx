import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BlueButton = styled(Button)`
  background-color: #92b4ec;
  border: none;
  box-shadow: 0px 2px 2px 0px rgb(0 0 0 / 14%);
  font-weight: 600;

  &.MuiButton-root:hover {
    background-color: #92b4ec;
  }
`;

export default function CustomButton({ children, ...props }) {
  return <BlueButton {...props}>{children}</BlueButton>;
}
