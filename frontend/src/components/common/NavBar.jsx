import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AssistantOutlinedIcon from '@mui/icons-material/AssistantOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<AssistantOutlinedIcon />} label="추천받기" />
      <Tab icon={<HistoryOutlinedIcon />} label="다시보기" />
      <Tab icon={<LocationOnOutlinedIcon />} label="동네분석" />
      <Tab icon={<PersonPinIcon />} label="다른일정" />
    </Tabs>
    </>
  );
};

export default NavBar;
