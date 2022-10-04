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
import StoreListItems from './StoreListItems'
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

export default function NearTabPanel({ type, nearData, getCurrentStore }) {
  console.log('neartabpanel, getcurrentstore', getCurrentStore)
  const [value, setValue] = React.useState(0);
  const leastActivityStore = nearData?.leastActivityStore
  const mostActivityStore = nearData?.mostActivityStore
  const leastFoodStore = nearData?.leastFoodStore
  const mostFoodStore = nearData?.mostFoodStore
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
          <TabPanel className="near-analysis__drawer--title" value={value} index={0}>
            {nearData?.mostActivityCategory}
          </TabPanel>
          <TabPanel value={value} index={0}>
            <List>
            {mostActivityStore?.map((e)=>{
              return <StoreListItems key={e.id} content={e} type={'activity'} getCurrentStore={getCurrentStore}/>
            })}
            </List>
          </TabPanel>         
          <TabPanel value={value} index={1}>
            <div className="near-analysis__drawer--title">{nearData?.leastActivityCategory}</div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List>
            {leastActivityStore?.map((e)=>{
              return <StoreListItems key={e.id} content={e} type={'activity'} getCurrentStore={getCurrentStore}/>
            })}
            </List>
          </TabPanel>         
        </>
      )}
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
            <div className="near-analysis__drawer--title">{nearData?.mostFoodCategory}</div>
          </TabPanel>
          <TabPanel value={value} index={0}>
            <List>

            {mostFoodStore?.map((e)=>{
              return <StoreListItems key={e.id} content={e} type={'food'} getCurrentStore={getCurrentStore}/>
            })}
            </List>
          </TabPanel>  
          <TabPanel value={value} index={1}>
            <div className="near-analysis__drawer--title">{nearData?.leastFoodCategory}</div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List>
            {leastFoodStore?.map((e)=>{
              return <StoreListItems key={e.id} content={e} type={'food'} getCurrentStore={getCurrentStore}/>
            })}
            </List>
          </TabPanel>  
        </>
      )}
    </>
  );
}
