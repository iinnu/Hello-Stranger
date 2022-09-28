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
import StoreCard from "./StoreCard";
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
          <div>{children}</div>
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

export default function NearList({ type }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
      {type === "food" && (
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
          <TabPanel value={value} index={0}>
            {foodList.map((e)=>{
              return <StoreCard data={e}/>
            })}
          </TabPanel>         


          <TabPanel value={value} index={1}>
            최소분포음식점
          </TabPanel>
          <TabPanel value={value} index={1}>
            {foodList.map((e)=>{
              return <StoreCard data={e}/>
            })}
          </TabPanel>         

        </>
      )}
      {type === "activity" && (
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
            최다분포활동
          </TabPanel>
          <TabPanel value={value} index={0}>
            {activityList.map((e)=>{
              return <StoreCard data={e}/>
            })}
          </TabPanel>  
          <TabPanel value={value} index={1}>
            최소분포활동
          </TabPanel>
          <TabPanel value={value} index={1}>
            {activityList.map((e)=>{
              return <StoreCard data={e}/>
            })}
          </TabPanel>  
        </>
      )}
    </>
  );
}
