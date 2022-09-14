import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import "styles/common/BottomNav.scss";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className="bottom-navigation-wrapper">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="추천받기" icon={<SearchIcon />} />
        <BottomNavigationAction label="다시보기" icon={<HistoryIcon />} />
        <BottomNavigationAction label="주변상권" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="다른조합" icon={<PeopleAltIcon />} />
      </BottomNavigation>
    </Box>
  );
}
