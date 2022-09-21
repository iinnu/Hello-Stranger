import React, { useState, useEffect } from "react";
import BottomNav from "components/common/BottomNav";
import Container from "components/common/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import Drawer from "@mui/material/Drawer";
import DetailInfoList from "components/DetailInfo/List";

import Map from "components/NearAnalysis/Map";
import "styles/NearAnalysisPage/NearAnalysisPage.scss";
function NearAnalysisPage() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [type, setType] = useState("nearFood");
  function openFood() {
    setOpenDrawer(true);
    setType("nearFood");
  }
  function openActivity() {
    setOpenDrawer(true);
    setType("nearActivity");
  }
  function closeDetail() {
    setOpenDrawer(false);
  }
  const buttons = [
    <Button className="near-analysis__control--button" onClick={openFood}>
      <RestaurantRoundedIcon />
      음식
    </Button>,
    <Button className="near-analysis__control--button" onClick={openActivity}>
      <SkateboardingIcon />
      활동
    </Button>,
  ];

  return (
    <>
      <Container>
        <div className="near-analysis">
          <Paper className="near-analysis__title">
            <div className="near-analysis__title--text">우리 동네 분석</div>
          </Paper>
          <ButtonGroup
            className="near-analysis__control"
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="contained"
          >
            {buttons}
          </ButtonGroup>
          <Map />
          <Drawer anchor="bottom" open={openDrawer} onClose={closeDetail}>
            <DetailInfoList type={type} />
          </Drawer>
        </div>
        <BottomNav />
      </Container>
    </>
  );
}

export default NearAnalysisPage;
