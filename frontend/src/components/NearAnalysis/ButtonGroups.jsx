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
const StyledButton = styled(Button)`
  border: none !important;
  &:hover{
    background-color:#92B4EC !important;
    color: white;
  }
  &:active{
    background-color:#92B4EC !important;
    color: white;
  }
`
export default function ButtonGroups({openFood, openActivity}){
 return(
  <ButtonGroup
  className="detail-info__control"
  orientation="vertical"
  aria-label="vertical contained button group"
  variant="contained"
  >
  <StyledButton className="detail-info__control--button" onClick={openFood}>
    <Row><RestaurantRoundedIcon /></Row>
    <Row>음식</Row>
  </StyledButton>
  <StyledButton className="detail-info__control--button" onClick={openActivity}>
    <Row><SportsTennisIcon /></Row>
    <Row>활동</Row>
  </StyledButton>
  </ButtonGroup>
 )
}