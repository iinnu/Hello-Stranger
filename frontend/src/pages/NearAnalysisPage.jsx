import React, { useState, useEffect } from "react";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import DetailInfoList from "components/NearAnalysis/Drawer/NearTabPanel";
import ButtonGroups from "components/NearAnalysis/ButtonGroups";
import NearDrawer from "components/NearAnalysis/Drawer/NearDrawer";
import NearMap from "components/NearAnalysis/Map";
import { useMainState } from 'components/Main/MainContext';
import useGeocoder from 'hook/useGeocoder';
import Loading from "components/Main/Map/Loading";

import "styles/NearAnalysisPage/NearAnalysisPage.scss";
import { getNearInfo } from "api/near";
function NearAnalysisPage() {
  const storeLocations = localStorage.getItem('storeLocationData')
  function Map({currentStore}){
      return storeLocations
      ? <NearMap currentStore={currentStore}/>
      : <Loading/>
  }
  const location =  JSON.parse(localStorage.getItem('current'))
  const { coord2RegionCode } = useGeocoder();
  const [nearData, setNearData] = useState({})
  const [currentStore, setCurrentStore] = useState({})
  const callback = (result) => {
    console.log('행정동?', result[1])
    localStorage.setItem('address', result[1]?.address_name)
  };
  const [loading, setLoading] = useState(true)
  const currentStoreLocation = JSON.parse(localStorage.getItem('currentStore'))

  useEffect(() => {
    const dataObject = {}
    async function getData(){
      if (location) {
        coord2RegionCode(location, callback);
      }
      const userAdress = localStorage.getItem('address')
      const current = JSON.parse(localStorage.getItem('current'))
      const data = await getNearInfo(userAdress, current)
      setNearData(data)
      const dataArray = Object.entries(data)
      console.log('dataArray', dataArray)
      dataArray?.map((key)=>{
        if(key[0]==='leastFoodStore' || key[0] ==='mostFoodStore'){
          return key[1].map((e)=>{
            const data = {lat: e.latitude, lng: e.longitude}
            dataObject[`food${e.id}`] = data
        })

        }else if (key[0] === 'leastActivityStore' || key[0] ==='mostActivityStore'){
          return key[1].map((e)=>{
            const data = {lat: e.latitude, lng: e.longitude}
            dataObject[`activity${e.id}`] = data
        }
      )}})
      localStorage.setItem('storeLocationData', JSON.stringify(dataObject))
    }
    getData()
  }, []);



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
  const [type, setType] = useState("food");
  function openFood() {
    setOpenDrawer(true);
    setType("food");
  }
  function openActivity() {
    setOpenDrawer(true);
    setType("activity");
  }
  function closeDetail() {
    setOpenDrawer(false);
  }
  function getCurrentStore(data){
    setCurrentStore(data)
    console.log('getcurrentStore 실행됨', data)
  }
  return (
    <>
      <Container>
        <div className="near-analysis">
          <Paper className="near-analysis__title">
            <div className="near-analysis__title--text">우리 동네 분석</div>
          </Paper>
          <ButtonGroups
            openFood={openFood}
            openActivity={openActivity}
          />
          {loading && <Map currentStore={currentStore}/>}
          <NearDrawer open={openDrawer} toggleDrawer={toggleDrawer} type={type} nearData={nearData} getCurrentStore={getCurrentStore}/>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}

export default NearAnalysisPage;
