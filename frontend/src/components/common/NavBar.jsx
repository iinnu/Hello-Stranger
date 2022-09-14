import React, {SyntheticEvent, useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { useNavigate, Link   } from "react-router-dom";
import "styles/NavBar.css"
const NavBar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function LinkTab(props) {
    return (
      <Tab
      component={Link}
      to={props.href}
      icon={props.icon}
      label={props.label}
    />
    )
  }
  return (
    <>
    <Tabs className="bottomNavBar" value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<AssistantOutlinedIcon />} label="추천받기" href="/main"/>
      <LinkTab icon={<HistoryOutlinedIcon />} label="다시보기" href="/history"/>
      <LinkTab icon={<LocationOnOutlinedIcon />} label="동네분석" href="/near"/>
      <LinkTab icon={<PersonPinIcon />} label="다른일정" href="/other"/>
    </Tabs>
    </>
  );
};

export default NavBar;
