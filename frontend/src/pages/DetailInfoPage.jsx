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
  console.log('location', location)
  const pathName = location.pathname.split('/')[1];
  const pathId = location.pathname.split('/')[2];
  const [currentPath, setCurrentPath] = useState('');
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
  const [detailTitle, setDetailTitle] = useState('')
  // const [detailRegDate, setDetailRegDate] = useState('')
  const [currentStore, setCurrentStore] = useState({})

  useLayoutEffect(()=> {
    async function getData(){
      if(pathName === 'other'){
        setIsHistory(false)
        console.log('다른유저')
        const Data = await getOtherUser()
        setUserData(Data)
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
        console.log('다시보기')
        const Data = await getUserDetail(pathId)
        setUserData(Data)
        const foodResponse = Data?.choice_food ? await getUserFood(Data.choice_food?.id) : {}
        const activityResponse = Data?.choice_activity ? await getUserActivity(Data.choice_activity?.id) : {}
        setFoodData(foodResponse)
        setActivityData(activityResponse)
        setIsHistory(true)
        // setDetailTitle(Data.title ?? '')
        setLeftFoodData(Data.food ?? [])
        setLeftActivityData(Data.activity ?? [])
        setPlaylistId(Data.playlistUrl ?? '')
        const storeLocationData = {
          food: {
            lat: Data.choice_food.latitude,
            lng: Data.choice_food.longitude
          },
          activity: {
            lat: (Data.choice_activity?.latitude ? Data.choice_activity.latitude : Data.choice_food.latitude),
            lng:  (Data.choice_activity?.longitude ? Data.choice_activity.longitude : Data.choice_food.longitude),
          },
        }
        localStorage.setItem('storeLocationData', JSON.stringify(storeLocationData))
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
  function Map({currentStore}){
    const localStorageData = localStorage.getItem('storeData')
    return (localStorageData
      ? <DetailInfoMap currentStore={currentStore}/>
      : null
    )
  }
  return (
    <>
      <FeedbackModal open={openModal} onClose={handleCloseModal} modalData={modalData}/>
      <Container>
        <div className="detail-info">
          <Map currentStore={currentStore}/>
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
