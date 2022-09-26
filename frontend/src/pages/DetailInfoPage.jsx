import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";

import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import Container from "components/common/Container";
import PlaceCard from "components/card/PlaceCard";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/Title";
import DetailInfoList from "components/DetailInfo/List";
import Map from "components/DetailInfo/Map";
import styled from "@emotion/styled";

//음악 추천 및 재생
import getRecommendation from "api/music_api";
import createPlaylist from "api/playlist";
import WebPlayback from "components/DetailInfo/WebPlayBack";

import "styles/DetailInfoPage/DetailInfoPage.scss";

export default function DetailInfoPage() {
  const [trackIdList, settrackIdList] = useState([]);
  async function recommend() {
    const data = await getRecommendation();
    console.log('오나?',data)
    const playlistIdList = await createPlaylist(data)
    settrackIdList(playlistIdList)
  }
  let { id } = useParams();
  const navigate = useNavigate();
  let isHistory = true;

  // 지금은 랜덤으로 받지만, 여기에 axios 요청이 들어갈 것
  if (id === undefined) {
    isHistory = false;
    id = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(id);
  }

  // useEffect(
  //   //axios 함수 통해서 historyId에 해당하는 유저의 일정 뽑아오기가 진행되어야 함
  // function test() {
  //   console.log("isHistory", isHistory);
  // }
  //   []
  // );

  // modal 관련 부분
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const cardList = {
    1: {
      title: "일정 제목1",
      foodTitle: "음식점1",
      activityTitle: "활동1",
      date: "2022.09.14",
    },
    2: {
      title: "일정 제목2",
      foodTitle: "음식점2",
      activityTitle: "활동2",
      date: "2022.09.14",
    },
    3: {
      title: "일정 제목3",
      foodTitle: "음식점3",
      activityTitle: "활동3",
      date: "2022.09.14",
    },
    4: {
      title: "일정 제목4",
      foodTitle: "음식점4",
      activityTitle: "활동4",
      date: "2022.09.14",
    },
  };

  const placeList = {
    1: {
      id: 1,
      title: "음식점1",
      address: "xx시 xx동",
      telephone: "010-000-0000",
      review: "x점",
    },
    2: {
      id: 1,
      title: "활동1",
      address: "xx시 xx동",
      telephone: "010-000-0000",
      review: "x점",
    },
  };

  const historyInfo = cardList[id];
  console.log(`historyInfo ${historyInfo}`);

  //Drawer 관련 부분
  const [openDrawer, setOpenDrawer] = useState(false);
  const [type, setType] = useState("");
  // function clickMusic() {
  //   setOpenDrawer(true);
  //   setType("historyMusic");
  // }
  function clickFood() {
    setOpenDrawer(true);
    setType("historyFood");
  }
  function clickActivity() {
    setOpenDrawer(true);
    setType("historyActivity");
  }
  function closeDetail() {
    setOpenDrawer(false);
  }
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            일정에 대한 피드백을 남겨주세요
          </Typography>
          <Button>좋았어요</Button>
          <Button>별로였어요</Button>
        </Box>
      </Modal>

      <Container>
        <Map />
        {isHistory && (
          <DetailInfoTitle historyInfo={historyInfo} handleOpen={handleOpen} />
        )}
        {/* <FeedbackButton variant="contained" onClick={handleOpen}>
          일 정<b />평 가
        </FeedbackButton> */}

        <div className="detail-info__music" onClick={recommend}>
          <LibraryMusicIcon />
          Now Playing...
        </div>
        {trackIdList.length !== 0 &&<WebPlayback playlist={trackIdList}/>}
        <div className="detail-info">
          <Grid container className="detail-info-inner">
            <PlaceCard placeInfo={placeList[1]} />
            <PlaceCard placeInfo={placeList[2]} />
            {isHistory && (
              <>
                <div className="detail-info__list">
                  <div className="detail-info__list--food" onClick={clickFood}>
                    <FastfoodIcon />
                  </div>
                  <div
                    className="detail-info__list--activity"
                    onClick={clickActivity}
                  >
                    <SkateboardingIcon />
                  </div>
                </div>
                <Drawer anchor="bottom" open={openDrawer} onClose={closeDetail}>
                  <DetailInfoList type={type} />
                </Drawer>
              </>
            )}
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}
