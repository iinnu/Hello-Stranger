import { useState } from 'react';
import { useRecommendContext } from 'components/Recommend/Context/RecommendContext';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import TabPanel from '../Plan/TabPanel';
import CustomButton from 'components/common/CustomButton';
import StoreSelect from '../Plan/StoreSelect';
import MusicSelect from '../Plan/MusicSelect';

const CustomTabs = styled(Tabs)`
  &.MuiTabs-root > .MuiTabs-scroller > .MuiTabs-indicator {
    background-color: #7c99c7;
  }
`;

const CustomTab = styled(Tab)`
  &.MuiButtonBase-root {
    font-size: 1.1em;

    & .MuiTouchRipple-root {
      opacity: 0;
    }
  }

  &.Mui-selected {
    font-weight: 900;
    color: #7c99c7;
  }
`;

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export default function PlanDrawer() {
  const { state } = useRecommendContext();
  const musicList = state.musicReducer.list.filter(
    (item) => item.choiceYN !== 2
  );
  const foodList = state.foodReducer.list.filter((item) => item.choiceYN !== 2);
  const activityList = state.activityReducer.list.filter(
    (item) => item.choiceYN !== 2
  );
  const [value, setValue] = useState(0);
  const [music, setMusic] = useState();
  const [food, setFood] = useState();
  const [activity, setActivity] = useState();

  const handleTabs = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickSave = () => {
    const payload = {
      activity: {
        category: activity.category.activityCategory,
        store: activity.category.store.map((item) => ({
          choiceYN: activity.store.id === item.id ? 'Y' : 'N',
          id: item.id,
        })),
      },
      food: {
        category: food.category.foodCategory,
        store: food.category.store.map((item) => ({
          choiceYN: food.store.id === item.id ? 'Y' : 'N',
          id: item.id,
        })),
      },
      musicId: music.musicID,
      playlist_url: '',
      title: music.musicName,
    };

    console.log(payload);
  };

  return (
    <>
      <Box sx={{ width: '100%', height: 'calc(100% - 40px)' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <CustomTabs
            value={value}
            onChange={handleTabs}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <CustomTab label="음악" {...a11yProps(0)} />
            <CustomTab label="음식" {...a11yProps(1)} />
            <CustomTab label="활동" {...a11yProps(2)} />
          </CustomTabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MusicSelect list={musicList} current={music} setCurrent={setMusic} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <StoreSelect
            type="food"
            list={foodList}
            current={food}
            setCurrent={setFood}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <StoreSelect
            type="activity"
            list={activityList}
            current={activity}
            setCurrent={setActivity}
          />
        </TabPanel>
      </Box>
      <CustomButton
        className="plan__button"
        variant="contained"
        disabled={!(music && food && activity)}
        onClick={handleClickSave}
      >
        저장
      </CustomButton>
    </>
  );
}
