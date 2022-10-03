import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ height: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
