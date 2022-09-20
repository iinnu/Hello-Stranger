import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Playlist from "components/Recommend/Music/Playlist";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DetailInfoList(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        {props.type === "historyFood" && (
          <>
            <LeftFoodListItem />
          </>
        )}
        {props.type === "historyActivity" && (
          <>
            <LeftActivityListItem />
          </>
        )}
      </>
    );
  }
  return (
    <>
      {props.type === "historyFood" && (
        <>
          <div className="detail-info__drawer--title">{foodCategoryName}</div>
          <div className="detail-info__drawer--list">
            <List>
              <DetailInfoListItem />
            </List>
          </div>
        </>
      )}
      {props.type === "historyActivity" && (
        <>
          <div className="detail-info__drawer--title">
            {activityCategoryName}
          </div>
          <div className="detail-info__drawer--list">
            <List>
              <DetailInfoListItem />
            </List>
          </div>
        </>
      )}
      {props.type === "historyMusic" && (
        <>
          <div className="detail-info__drawer--list">
            <List>
              <DetailInfoListItem />
            </List>
          </div>
        </>
      )}
      {props.type === "nearFood" && (
        <>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="최다" {...a11yProps(0)}></Tab>
            <Tab label="최소" {...a11yProps(1)}></Tab>
          </Tabs>
          <TabPanel value={value} index={0}>
            최다분포음식점
          </TabPanel>
          <TabPanel value={value} index={1}>
            최소분포음식점
          </TabPanel>
        </>
      )}
      {props.type === "nearActivity" && <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="최다" {...a11yProps(0)}></Tab>
        <Tab label="최소" {...a11yProps(1)}></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        최다분포활동
      </TabPanel>
      <TabPanel value={value} index={1}>
        최소분포활동
      </TabPanel>
      </>
      }
    </>
  );
}
