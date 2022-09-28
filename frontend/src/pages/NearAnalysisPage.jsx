import React, { useState, useEffect } from "react";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import DetailInfoList from "components/NearAnalysis/Drawer/TabPanel";
import ButtonGroups from "components/NearAnalysis/ButtonGroups";
import NearDrawer from "components/NearAnalysis/Drawer/NearDrawer";
import Map from "components/NearAnalysis/Map";
import "styles/NearAnalysisPage/NearAnalysisPage.scss";
function NearAnalysisPage() {
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
          <Map />
          <NearDrawer open={openDrawer} toggleDrawer={toggleDrawer} type={type}/>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}

export default NearAnalysisPage;
