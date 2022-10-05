import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SkateboardingIcon from "@mui/icons-material/Skateboarding";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import styled from '@emotion/styled';

const Row = styled('div')`
  display: flex;
  justify-content: center;
`;
export default function DetailInfoButtonGroups({isHistory, clickFood, clickActivity, clickMusic}){
 return(
  <ButtonGroup
  className="detail-info__control"
  orientation="vertical"
  aria-label="vertical contained button group"
  variant="contained"
  >
  {isHistory &&
  <Button className="detail-info__control--button" onClick={clickMusic}>
    <Row><LibraryMusicIcon /></Row>
    <Row>음악</Row>
  </Button>}
  <Button className="detail-info__control--button" onClick={clickFood}>
    <Row><RestaurantRoundedIcon /></Row>
    <Row>음식</Row>
  </Button>
  <Button className="detail-info__control--button" onClick={clickActivity}>
    <Row><SportsTennisIcon /></Row>
    <Row>활동</Row>
  </Button>

  </ButtonGroup>

 )
}