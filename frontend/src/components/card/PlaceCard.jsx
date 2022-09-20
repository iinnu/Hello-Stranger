import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function PlaceCard({placeInfo}) {
    function openDetail(){
        console.log('상세정보 불러오기')
    };
    return (
    <>
      <div className="detail-info__card">
        <Card onClick={openDetail}>
          <CardContent>
            <Typography> {placeInfo.title} </Typography>
            <Typography> {placeInfo.address} </Typography>
            <Typography> {placeInfo.telephone} </Typography>
            <Typography> {placeInfo.review} </Typography>
          </CardContent>
        </Card>
      </div>
    </>
    );
}

export default PlaceCard