import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ButtonGroups from "components/DetailInfo/ButtonGroups";
import FeedbackModal from "components/DetailInfo/Modal";
import StoreInfo from "components/DetailInfo/Drawer/StoreInfo";
import StoreInfoDrawer from "components/DetailInfo/Drawer/DetailStoreInfoDrawer";
import MusicDrawer from 'components/DetailInfo/MusicDrawer'
import Container from "components/common/Container";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/Title";
import DetailInfoMap from "components/DetailInfo/Map";

// data api
import {getOtherUser,getOtherUserActivity, getOtherUserFood} from 'api/other'
import axios from 'axios'
import "styles/DetailInfoPage/DetailInfoPage.scss";
import { getUserDetail, getUserActivity, getUserFood } from "api/history";
import { useLocation } from "react-router-dom";

export default function DetailInfoPage() {
  const location = useLocation()
  const pathName = location.pathname.split('/')[1];
  const pathId = location.pathname.split('/')[2];
  const [currentPath, setCurrentPath] = useState('');
  const [userData, setUserData] = useState(null)
  const [detailData, setDetailData] = useState({})

  const [leftData, setLeftData] = useState([])
  const [leftFoodData, setLeftFoodData] = useState({})
  const [leftActivityData, setLeftActivityData] = useState({})

  const [isHistory, setIsHistory] = useState(true)
  const [type, setType] = useState("");
  const [detailTitle, setDetailTitle] = useState('')
  const [detailDate, setDetailDate] = useState('')
  const [currentStore, setCurrentStore] = useState({})

  function Map({currentStore}){
    return (userData
      ? <DetailInfoMap currentStore={currentStore}/>
      : null
    )
  }

  useEffect(()=> {
    async function getData(){
      if(pathName === 'other'){
        console.log('다른유저')
        const Data = await getOtherUser()
        setUserData(Data)
        setIsHistory(false)
        const storeLocationData = {
          food: {
            lat: Data.food.latitude,
            lng: Data.food.longitude
          },
          activity: {
            lat: Data.activity.latitude,
            lng: Data.activity.longitude
          },
        }
        localStorage.setItem('storeLocationData', JSON.stringify(storeLocationData))
        localStorage.setItem('storeData', JSON.stringify(Data))
      } else {
        console.log('다시보기', pathId)
        const Data = await getUserDetail(pathId)
        setUserData(Data)
        setIsHistory(true)
        setDetailTitle(Data.title)
        setDetailDate(Data.activity.time)
        setLeftFoodData(Data.food)
        setLeftActivityData(Data.activity)
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

  async function clickFood() {
    setOpenDrawer(true);
    setType("food");
    if(isHistory){
      const response = await getUserFood(userData.choice_food.foodId)
      const pos = {
        lat: userData.choice_food.latitude,
        lng: userData.choice_food.longitude
      }
      setDetailData(response)
      setCurrentStore(pos)
      setLeftData(leftFoodData)
      console.log('food, history')
    } 
    else {
      const pos = {
        lat: userData.food.latitude,
        lng: userData.food.longitude
      }
      setCurrentStore(pos)
      setDetailData(userData.food)
      console.log('food, other', pos, currentStore)
    }
  }
  async function clickActivity() {

    setOpenDrawer(true);
    setType("activity");
    if(isHistory){
      const response = await getUserActivity(userData.choice_activity.activityId)
      const pos = {
        lat: userData.choice_activity.latitude,
        lng: userData.choice_activity.longitude
      }
      setDetailData(response)
      setCurrentStore(pos)
      setLeftData(leftActivityData)
      console.log('activity, history')
    } 
    else {
      const pos = {
        lat: userData.food.latitude,
        lng: userData.food.longitude
      }
      setCurrentStore(pos)
      setDetailData(userData.activity)
      console.log('activity, other', pos, currentStore)

    }
  }
  function clickMusic() {
    console.log('clickMusic')
    setOpenMusicDrawer(true);
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
          <Map currentStore={currentStore}/>
          {isHistory && (
            <DetailInfoTitle
              title={detailTitle}
              date={detailDate}
              handleOpenModal={handleOpenModal}
            />
          )}
          <Grid container className="detail-info-inner">
            <StoreInfoDrawer 
            open={openDrawer} 
            toggleDrawer={toggleDrawer} 
            detailData={detailData} 
            leftData={leftData}
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
