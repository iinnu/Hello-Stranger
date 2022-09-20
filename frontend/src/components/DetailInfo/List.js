import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";

export default function DetailInfoList(props) {
  const foodCategoryName = "음식 카테고리";
  const leftFoodList = [
    {
      foodId: 1,
      foodTitle: "음식점11",
    },
    {
      foodId: 2,
      foodTitle: "음식점22",
    },
  ];
  function LeftFoodListItem() {
    return leftFoodList.map((e) => {
      return <ListItem>{e.foodTitle}</ListItem>;
    });
  }
  const activityCategoryName = "활동 카테고리";
  const leftActivityList = [
    {
      activityId: 1,
      activityTitle: "활동11",
    },
    {
      activityId: 2,
      activityTitle: "활동22",
    },
  ];
  function LeftActivityListItem() {
    return leftActivityList.map((e) => {
      return <ListItem>{e.activityTitle}</ListItem>;
    });
  }
  function DetailInfoListItem() {
    return (
      <>
        {props.type === "food" && (
          <>
            <LeftFoodListItem />
          </>
        )}
        {props.type === "activity" && (
          <>
            <LeftActivityListItem />
          </>
        )}
      </>
    );
  }
  return (
    <>
      {props.type === "food" && (
        <div className="detail-info__drawer--title">{foodCategoryName}</div>
      )}
      {props.type === "activity" && (
        <div className="detail-info__drawer--title">{activityCategoryName}</div>
      )}
      <div className="detail-info__drawer--list">
        <List>
          <DetailInfoListItem />
        </List>
      </div>
    </>
  );
}
