import { useState } from 'react';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import MenuItem from './MenuItem';

const list = [
  { icon: <QueueMusicIcon />, label: '음악' },
  { icon: <RestaurantIcon />, label: '음식' },
  { icon: <SportsTennisIcon />, label: '활동' },
];

const drawer = ['음악 플레이리스트', '음식 가게 목록', '활동 가게 목록'];

export default function LeftMenu() {
  const [menu, setMenu] = useState(0);

  const handleClick = (index) => {
    setMenu(index);
  };

  return (
    <>
      <div className="recommend-result-map__menu menu--left">
        {list.map((item, index) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => handleClick(index)}
            active={menu === index ? true : false}
          />
        ))}
      </div>
      <div className="recommend-result-map__drawer">{drawer[menu]}</div>
    </>
  );
}
