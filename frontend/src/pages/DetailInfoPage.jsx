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
import { getUserDetail, getUserActivity, getUserFood, rateRecommendation } from "api/history";
import { useLocation } from "react-router-dom";

export default function DetailInfoPage() {
  const location = useLocation()
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

  const [isHistory, setIsHistory] = useState(true)
  const [type, setType] = useState("");
  const [detailTitle, setDetailTitle] = useState('')
  const [detailDate, setDetailDate] = useState('')
  const [currentStore, setCurrentStore] = useState({})

  function Map({currentStore}){
    const localStorageData = localStorage.getItem('storeData')
    return (localStorageData
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
        console.log('다시보기')
        const Data = await getUserDetail(pathId)
        setUserData(Data)
        const foodResponse = Data?.choice_food ? await getUserFood(Data.choice_food?.id) : {}
        const activityResponse = Data?.choice_activity ? await getUserActivity(Data.choice_activity?.id) : {}
        setFoodData(foodResponse)
        setActivityData(activityResponse)
        setIsHistory(true)
        setDetailTitle(Data.title ?? '')
        setLeftFoodData(Data.food ?? [])
        setLeftActivityData(Data.activity ?? [])
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
    setType("food");
    if(isHistory){
      const pos = {
        lat: userData.choice_food.latitude,
        lng: userData.choice_food.longitude
      }
      setDetailData(foodData ?? [])
      setCurrentStore(pos)
      setLeftData(leftFoodData ?? [])
      console.log('food, history',pos, currentStore, userData.choice_food.id,leftFoodData, detailData)
    } 
    else {
      const pos = {
        lat: userData.food.latitude,
        lng: userData.food.longitude
      }
      setCurrentStore(pos)
      setDetailData(userData.food ?? [])
      console.log('food, other', pos, currentStore, userData.food.id, foodData, activityData, detailData)
    }
    setOpenDrawer(true);
  }
  async function clickActivity() {
    setOpenDrawer(true);
    console.log('clickActivity', isHistory)
    setType("activity");
    if(isHistory){
      console.log('activityData', activityData)
      const pos = {
        lat: userData.choice_activity?.latitude ? userData.choice_activity?.latitude: userData.choice_food?.latitude,
        lng: userData.choice_activity?.longitude ? userData.choice_activity?.longitude: userData.choice_food?.longitude
      }
      setDetailData(activityData ?? [])
      setCurrentStore(pos)
      setLeftData(leftActivityData ?? [])
      console.log('activity, history',pos, currentStore, userData.choice_activity?.id,leftActivityData, detailData)
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
    musicId: 0, 
  }

  return (
    <>
      <FeedbackModal open={openModal} onClose={handleCloseModal} modalData={modalData}/>
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
