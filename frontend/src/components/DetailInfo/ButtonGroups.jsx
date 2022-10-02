import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";

export default function DetailInfoButtonGroups({isHistory, clickFood, clickActivity, clickMusic}){
 return(
  <ButtonGroup
  className="detail-info__control"
  orientation="vertical"
  aria-label="vertical contained button group"
  variant="contained"
  >
  <Button className="detail-info__control--button" onClick={clickFood}>
  <RestaurantRoundedIcon />
  음식
  </Button>
  <Button className="detail-info__control--button" onClick={clickActivity}>
    <SkateboardingIcon />
    활동
  </Button>
  {isHistory &&
  <Button className="detail-info__control--button" onClick={clickMusic}>
    <LibraryMusicIcon />
    음악
  </Button>}
  </ButtonGroup>

 )
}