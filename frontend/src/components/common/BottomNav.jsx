import * as React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

// 수정한 아이콘 - 병헌
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';

// react-router와 연결
import { Link } from 'react-router-dom';
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
        <BottomNavItem
          component={Link}
          to="/main"
          label="추천받기"
          icon={<AssistantOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to="/history"
          label="다시보기"
          icon={<HistoryOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to="/near"
          label="주변상권"
          icon={<LocationOnOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to="/other"
          label="다른일정"
          icon={<PersonPinIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
