import { useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MusicDrawer from './MusicDrawer';
import FoodDrawer from './FoodDrawer';
import ActivityDrawer from './ActivityDrawer';
import PlanDrawer from './PlanDrawer';

const drawer = [
  '음악 플레이리스트',
  '음식 가게 목록',
  '활동 가게 목록',
  '일정 저장',
];

const drawerContent = [
  <MusicDrawer />,
  <FoodDrawer />,
  <ActivityDrawer />,
  <PlanDrawer />,
];

const backdrop = {
  style: { background: 'none' },
};

const Puller = styled(Box)(({ theme }) => ({
  width: 100,
  height: 5,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 50px)',
}));

const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  &.MuiDrawer-root > .MuiPaper-root {
    height: calc(85% - 80px);
    overflow: visible;
    padding: 0;
    width: 100%;
    max-width: 500px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: none;
    left: 50%;
    margin-left: -250px;

    @media (max-width: 500px) {
      margin-left: -50vw;
    }
  }
`;

export default function MenuDrawer({ menu }) {
  const puller = useMemo(() => <Puller />, []);
  const [open, setOpen] = useState(false);

  // drawer
  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(state);
  };

  return (
    <>
      <div
        className="recommend-result-map__drawer"
        onClick={toggleDrawer(true)}
      >
        {puller}
        <div className="drawer__inner">{drawer[menu]}</div>
      </div>
      <CustomSwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={80}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
          componentsProps: { backdrop: backdrop },
        }}
      >
        <div
          className="recommend-result-map__drawer recommend-result-map__drawer--swipeable"
          onClick={toggleDrawer(false)}
        >
          {puller}
          <div className="drawer__inner">{drawer[menu]}</div>
        </div>
        {menu !== -1 && drawerContent[menu]}
      </CustomSwipeableDrawer>
    </>
  );
}
