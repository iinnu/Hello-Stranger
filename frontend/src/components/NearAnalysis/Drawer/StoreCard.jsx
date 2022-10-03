import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { useState, useEffect } from "react";
export default function StoreCard({data}){
 const foodList = [
  {
    id: 1,
    title: "음식점11",
  },
  {
    id: 2,
    title: "음식점22",
  },
];
 const activityList = [
   {
     iId: 1,
     title: "활동11",
   },
   {
     id: 2,
     title: "활동22",
   },
 ];
 return (
  <>
   <div>
    {data.title}
   </div>
  </>
 );
}