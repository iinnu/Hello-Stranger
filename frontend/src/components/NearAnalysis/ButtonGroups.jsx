import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import styled from '@emotion/styled';

const Row = styled('div')`
  display: flex;
  justify-content: center;
`;
export default function ButtonGroups({openFood, openActivity}){
 return(
  <ButtonGroup
  className="detail-info__control"
  orientation="vertical"
  aria-label="vertical contained button group"
  variant="contained"
  >
  <Button className="detail-info__control--button" onClick={openFood}>
    <Row><RestaurantRoundedIcon /></Row>
    <Row>음식</Row>
  </Button>
  <Button className="detail-info__control--button" onClick={openActivity}>
    <Row><SportsTennisIcon /></Row>
    <Row>활동</Row>
  </Button>
  </ButtonGroup>
 )
}