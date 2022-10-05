import React, { useState, useEffect, useLayoutEffect } from "react";
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
  // const storeLocations = localStorage.getItem('storeLocationData')
  function Map({currentStore, markerData}){
      return (markerData !== [])
      ? <NearMap currentStore={currentStore} markerData={markerData}/>
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
  // const [loading, setLoading] = useState(true)
  const currentStoreLocation = JSON.parse(localStorage.getItem('currentStore'))

  const [markerData, setMarkerData] = useState([])

  useLayoutEffect(() => {
    async function getData(){
      if (location) {
        coord2RegionCode(location, callback);
      }
      const userAdress = localStorage.getItem('address')
      const current = JSON.parse(localStorage.getItem('current'))
      const {data, locationData} = await getNearInfo(userAdress, current)
      setNearData(data)
      setMarkerData(locationData)
      // setLoading(false)
      console.log('data, locationData',data, locationData)
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
          {(markerData === [])
          ? <Loading/>
          : <Map currentStore={currentStore} markerData={markerData}/>
          }
          <NearDrawer open={openDrawer} toggleDrawer={toggleDrawer} type={type} nearData={nearData} getCurrentStore={getCurrentStore}/>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}

export default NearAnalysisPage;
