import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ButtonGroups from "components/DetailInfo/ButtonGroups";
import FeedbackModal from "components/DetailInfo/Modal";
import StoreInfoDrawer from "components/Recommend/Category/Detail/Map/StoreInfoDrawer";
import Container from "components/common/Container";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/Title";
import Map from "components/DetailInfo/Map";

//음악 추천 및 재생
import getRecommendation from "api/music_api";
import createPlaylist from "api/playlist";
import WebPlayback from "components/DetailInfo/WebPlayBack";

import "styles/DetailInfoPage/DetailInfoPage.scss";

export default function DetailInfoPage() {
  const [trackIdList, settrackIdList] = useState([]);
  async function recommend() {
    const data = await getRecommendation();
    console.log("오나?", data);
    const playlistIdList = await createPlaylist(data);
    settrackIdList(playlistIdList);
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

  // drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(state);
  };

  const [type, setType] = useState("");
  function clickFood() {
    setOpenDrawer(true);
    setType("historyFood");
  }
  function clickActivity() {
    setOpenDrawer(true);
    setType("historyActivity");
  }

  // modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);

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

  // music spotify api
  async function getMusic() {
    const data = await getRecommendation();
    console.log('오나?',data)
    const playlistIdList = await createPlaylist(data)
    settrackIdList(playlistIdList)
  }


  const historyInfo = cardList[id];

  const current = JSON.parse(localStorage.getItem("current"));

  return (
    <>
      <FeedbackModal open={openModal} onClose={handleCloseModal} />
      <Container>
        <div className="detail-info">
          <ButtonGroups
            isHistory={isHistory}
            clickFood={clickFood}
            clickActivity={clickActivity}
            getRecommendation={clickActivity}
          />
          <Map />
          {isHistory && (
            <DetailInfoTitle
              historyInfo={historyInfo}
              handleOpenModal={handleOpenModal}
            />
          )}
          {trackIdList.length !== 0 && <WebPlayback className="detail-info__plyaer" playlist={trackIdList} />}
          <Grid container className="detail-info-inner">
            <StoreInfoDrawer open={openDrawer} toggleDrawer={toggleDrawer} />
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}
