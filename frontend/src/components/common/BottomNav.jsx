import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import 'styles/common/BottomNav.scss';

const BottomNavItem = styled(BottomNavigationAction)`
  &.Mui-selected {
    color: #92b4ec;
  }
`;

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
        <BottomNavItem label="추천받기" icon={<SearchIcon />} />
        <BottomNavItem label="다시보기" icon={<HistoryIcon />} />
        <BottomNavItem label="주변상권" icon={<LocationOnIcon />} />
        <BottomNavItem label="다른조합" icon={<PeopleAltIcon />} />
      </BottomNavigation>
    </Box>
  );
}
