import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export default function CustomTextField({ children, ...props }) {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props}>{children}</TextField>
    </ThemeProvider>
  );
}
