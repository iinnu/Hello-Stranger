import React, { useState, useEffect } from "react";

import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

//음악 추천 및 재생
import getRecommendation from "api/music_api";
import createPlaylist from "api/playlist";
import WebPlayback from "components/DetailInfo/WebPlayBack";

const backdrop = {
  style: { background: 'none' },
};

const CustomSwipeableDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    padding: 0;
    width: 100%;
    max-width: 500px;
    right: 0;
    left: unset;
    box-shadow: 0px -2px 5px 0px #d6d6d6;
    border-radius: 0;
    background-color: #b5c9db;
    height: 75%;
  }
`;

const StyledBox = styled('div')`
  margin-bottom: 8px;
  background-color: white;
`;

const CustomLabel = styled(Button)`
  background-color: white;
  color: black;
  cursor: default;

  &:hover {
    background: none;
  }

  & .MuiTouchRipple-root {
    display: none;
  }
`;

export default function StoreInfoDrawer({ open, toggleDrawer }) {
  const [trackIdList, settrackIdList] = useState([]);
  const [playlist, setPlaylist] = useState([])
  async function getMusic() {
    const data = await getRecommendation();
    console.log('오나?',data)
    const {playlistIdList, playlist} = await createPlaylist(data)
    console.log('zzzz', playlistIdList, playlist)
    settrackIdList(playlistIdList)
    setPlaylist(playlist)
  }
  useEffect(()=>{getMusic()},[])

  return (
    <CustomSwipeableDrawer
      anchor="bottom"
      open={open}
      disable
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition
      disableDiscovery
      disableSwipeToOpen
      ModalProps={{
        componentsProps: { backdrop: backdrop },
      }}
      className="detail-info__music"
    >
      {trackIdList.length !== 0 && <WebPlayback className="detail-info__music--player" trackIdList={trackIdList} playlist={playlist}/>}
    </CustomSwipeableDrawer>
  );
}
