import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ButtonGroups from "components/DetailInfo/ButtonGroups";
import FeedbackModal from "components/DetailInfo/Modal";
import StoreInfoDrawer from "components/DetailInfo/Drawer/StoreInfoDrawer2";
import MusicDrawer from 'components/DetailInfo/MusicDrawer'
import Container from "components/common/Container";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/Title";
import Map from "components/DetailInfo/Map";

// data api
import {getOtherUser} from 'api/other'
import axios from 'axios'
import "styles/DetailInfoPage/DetailInfoPage.scss";
import { getUserDetail } from "api/history";
import { useLocation } from "react-router-dom";

export default function DetailInfoPage() {
  const location = useLocation()
  const pathName = location.pathname.split('/')[1];
  const [currentPath, setCurrentPath] = useState('');
  const [userData, setUserData] = useState({})
  const [isHistory, setIsHistory] = useState(true)
  const [type, setType] = useState("");
  const [detailTitle, setDetailTitle] = useState('')
  const [detailDate, setDetailDate] = useState('')

  useEffect(()=> {
    async function getData(){
      if(pathName === 'other'){
        console.log('다른유저')
        const Data = await getOtherUser()
        setUserData(Data)
        setIsHistory(false)
      } else {
        console.log('다시보기')
        const Data = await getUserDetail()
        setUserData(Data)
        setIsHistory(true)
        setDetailTitle(Data.title)
        setDetailDate(Data.activity.time)
      }
    }
    getData()
  }
  ,[])
  const [trackIdList, settrackIdList] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  // drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMusicDrawer, setOpenMusicDrawer] = useState(false);
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
  const toggleMusicDrawer = (state) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenMusicDrawer(state);
  };

  // 
  function clickFood() {
    setOpenDrawer(true);
    setType("food");
  }
  function clickActivity() {
    setOpenDrawer(true);
    setType("activity");
  }
  function clickMusic() {
    console.log('clickMusic')
    setOpenMusicDrawer(true);
    // setType("historyActivity");
  }

  // modal
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => setOpenModal(false);


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
            clickMusic={clickMusic}
          />
          <Map />
          {isHistory && (
            <DetailInfoTitle
              title={detailTitle}
              date={detailDate}
              handleOpenModal={handleOpenModal}
            />
          )}
          {/* {trackIdList.length !== 0 && <WebPlayback className="detail-info__plyaer" playlist={trackIdList} />} */}
          <Grid container className="detail-info-inner">
            <StoreInfoDrawer 
            open={openDrawer} 
            toggleDrawer={toggleDrawer} 
            userData={userData} 
            isHistory={isHistory}
            type={type}
            />
            <MusicDrawer open={openMusicDrawer} toggleDrawer={toggleMusicDrawer}/>
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}
