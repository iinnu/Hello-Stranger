import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export default function CustomButton({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
}
