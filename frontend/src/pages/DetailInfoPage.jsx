import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";

import ButtonGroups from "components/DetailInfo/ButtonGroups";
import FeedbackModal from "components/DetailInfo/Modal";
import StoreInfoDrawer from "components/DetailInfo/Drawer/DetailStoreInfoDrawer";
import MusicDrawer from 'components/DetailInfo/MusicDrawer'
import Container from "components/common/Container";
import BottomNav from "components/common/BottomNav";
import DetailInfoTitle from "components/DetailInfo/Title";
import DetailInfoMap from "components/DetailInfo/Map";
import Loading from "components/Main/Map/Loading";
import Paper from "@mui/material/Paper";

// data api
import {getOtherUser,getOtherUserActivity, getOtherUserFood} from 'api/other'
import axios from 'axios'
import "styles/DetailInfoPage/DetailInfoPage.scss";
import { getUserDetail, getUserActivity, getUserFood, rateRecommendation } from "api/history";
import { useLocation } from "react-router-dom";

export default function DetailInfoPage() {
  const location = useLocation()
  const pathName = location.pathname.split('/')[1];
  const pathId = location.pathname.split('/')[2];
  const [userData, setUserData] = useState(null)
  const [detailData, setDetailData] = useState({})
  const [foodData, setFoodData] = useState({})
  const [activityData, setActivityData] = useState({})
  const [leftData, setLeftData] = useState([])
  const [leftFoodData, setLeftFoodData] = useState([])
  const [leftActivityData, setLeftActivityData] = useState([])
  const [playlistId, setPlaylistId] = useState('')
  const [isHistory, setIsHistory] = useState(true)
  const [type, setType] = useState("");
  const [currentStore, setCurrentStore] = useState({})
  const [markerData, setMarkerData] = useState([])
  // const [currentPath, setCurrentPath] = useState('');
  // const [detailTitle, setDetailTitle] = useState('')
  // const [detailRegDate, setDetailRegDate] = useState('')
  useEffect(()=>{console.log('markerData가 바뀜', markerData)},[markerData])
  useLayoutEffect(()=> {
    async function getData(){
      if(pathName === 'other'){
        console.log('다른유저')
        const {Data, locationData} = await getOtherUser()
        setMarkerData(locationData)
        setIsHistory(false)
        setUserData(Data)
        console.log('locationData 올텐데?', locationData)
        localStorage.setItem('storeData', JSON.stringify(Data))
      } else {
        console.log('다시보기')
        const {Data, locationData} = await getUserDetail(pathId)
        setMarkerData(locationData)
        setUserData(Data)
        const foodResponse = Data?.choice_food ? await getUserFood(Data.choice_food?.id) : {}
        const activityResponse = Data?.choice_activity ? await getUserActivity(Data.choice_activity?.id) : {}
        setFoodData(foodResponse)
        setActivityData(activityResponse)
        setIsHistory(true)
        setLeftFoodData(Data.food ?? [])
        setLeftActivityData(Data.activity ?? [])
        setPlaylistId(Data.playlistUrl ?? '')
        localStorage.setItem('storeData', JSON.stringify(Data))
      }
    }
    getData()
  }
  ,[pathName])

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
    console.log('clickFood 동작', userData, activityData, leftActivityData, foodData, leftFoodData)
    setType("food");
    if(isHistory){
      const pos = {
        lat: userData.choice_food.latitude,
        lng: userData.choice_food.longitude
      }
      setDetailData(foodData ?? [])
      setCurrentStore(pos)
      setLeftData(leftFoodData ?? [])
    } 
    else {
      const pos = {
        lat: userData.food.latitude,
        lng: userData.food.longitude
      }
      setCurrentStore(pos)
      setDetailData(userData.food ?? [])
    }
    setOpenDrawer(true);
  }
  async function clickActivity() {
    console.log('clickActivity 동작', userData, activityData, leftActivityData, foodData, leftFoodData)
    setOpenDrawer(true);
    setType("activity");
    if(isHistory){
      setDetailData(activityData ?? [])
      setLeftData(leftActivityData ?? [])
      const pos = {
        lat: userData.choice_activity?.latitude ? userData.choice_activity?.latitude: userData.choice_food?.latitude,
        lng: userData.choice_activity?.longitude ? userData.choice_activity?.longitude: userData.choice_food?.longitude
      }
      setCurrentStore(pos)
    } 
    else {
      const pos = {
        lat: userData.food.latitude,
        lng: userData.food.longitude
      }
      setCurrentStore(pos)
      setDetailData(userData.activity ?? [])
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
  const modalData = {
    reviewId: parseInt(pathId), 
    activityCatergory: userData?.choice_activity?.category, 
    foodCategory:  userData?.choice_food?.category, 
    musicId: userData?.musicId, 
  }
  function Map({currentStore, markerData, pathName}){
    console.log('Map rendering data', currentStore, markerData, pathName)
    return (markerData !== []
      ? <DetailInfoMap currentStore={currentStore} markerData={markerData} pathName={pathName} 
      foodData={foodData} activityData={activityData} />
      : <Loading/>
    )
  }
  return (
    <>
      <FeedbackModal open={openModal} onClose={handleCloseModal} modalData={modalData}/>
      <Container>
        <div className="detail-info">
          {(markerData === 0)
            ? null
            : <Map currentStore={currentStore} markerData={markerData} pathName={pathName}/>
          }
          {isHistory
          ? <DetailInfoTitle
          title={userData?.title}
          regDate={userData?.regDate}
          handleOpenModal={handleOpenModal}
          canEvaluate={location.state?.canEvaluate}
          />
          : <Paper className="detail-info__title--other">
              <div className="detail-info__title--other--text">다른 유저 일정</div>
            </Paper>
          }
          <ButtonGroups
            isHistory={isHistory}
            clickFood={clickFood}
            clickActivity={clickActivity}
            clickMusic={clickMusic}
          />
          <Grid container className="detail-info-inner">
            {detailData !== {} &&
              <StoreInfoDrawer 
              open={openDrawer} 
              toggleDrawer={toggleDrawer} 
              detailData={detailData} 
              leftData={leftData}
              isHistory={isHistory}
              type={type}
              />
            }
            {isHistory ? <MusicDrawer open={openMusicDrawer} toggleDrawer={toggleMusicDrawer} playlistId={playlistId}/> : null}
          </Grid>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}
