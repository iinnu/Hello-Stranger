import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";

export default function ButtonGroups({openFood, openActivity}){
 return(
  <ButtonGroup
  className="detail-info__control"
  orientation="vertical"
  aria-label="vertical contained button group"
  variant="contained"
  >
  <Button className="detail-info__control--button" onClick={openFood}>
  <RestaurantRoundedIcon />
  음식
  </Button>
  <Button className="detail-info__control--button" onClick={openActivity}>
    <SkateboardingIcon />
    활동
  </Button>
  </ButtonGroup>
 )
}