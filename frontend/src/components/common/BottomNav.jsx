import * as React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// 수정한 아이콘 - 병헌
import AssistantOutlinedIcon from "@mui/icons-material/AssistantOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonPinIcon from "@mui/icons-material/PersonPin";

// react-router와 연결
import { Link, useLocation } from "react-router-dom";
import "styles/common/BottomNav.scss";
import { useEffect } from "react";

const BottomNavItem = styled(BottomNavigationAction)`
  &.Mui-selected {
    color: #92b4ec;
  }
`;

export default function BottomNav() {
  const location = useLocation()
  const pathname = location.pathname;
  const pathnameWithId = '/'+pathname.split('/')[1]
  useEffect(
    function(){
      setValue(pathnameWithId)
    }
  ,[pathnameWithId])
  const [value, setValue] = React.useState(pathname);

  return (
    <Box className="bottom-navigation-wrapper">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          // console.log("uselocation", pathname, typeof(pathname), current(pathname));
          setValue(newValue);
        }}
      >
        <BottomNavItem
          component={Link}
          to={"/main"}
          value={"/main"}
          label="추천받기"
          icon={<AssistantOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to={"/history"}
          value={"/history"}
          label="다시보기"
          icon={<HistoryOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to={"/near"}
          value={"/near"}
          label="동네분석"
          icon={<LocationOnOutlinedIcon />}
        />
        <BottomNavItem
          component={Link}
          to={"/other"}
          value={"/other"}
          label="다른일정"
          icon={<PersonPinIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
