import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import CustomModal from 'components/common/CustomModal';
import MenuItem from './MenuItem';
import MenuDrawer from './Drawer/MenuDrawer';

const list = [
  { icon: <QueueMusicIcon />, label: '음악' },
  { icon: <RestaurantIcon />, label: '음식' },
  { icon: <SportsTennisIcon />, label: '활동' },
];

export default function Menu() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(-1);
  const [modal, setModal] = useState(false);

  // 왼쪽 메뉴
  const handleClickMenu = (index) => {
    if (menu === index) setMenu(-1);
    else setMenu(index);
  };

  // 오른쪽 메뉴 - 홈으로
  const handleClickHome = useCallback(() => {
    setModal(true);
  }, []);

  // 모달창
  const handleConfirm = useCallback(() => {
    navigate('/main');
  }, []);

  const handleCancle = useCallback(() => {
    setModal(false);
  }, []);

  return (
    <>
      <div className="recommend-result-map__menu menu--left">
        {list.map((item, index) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            onClick={() => handleClickMenu(index)}
            active={menu === index ? true : false}
          />
        ))}
      </div>
      <div className="recommend-result-map__menu menu--right">
        <MenuItem
          icon={<BookmarkIcon />}
          label="일정저장"
          onClick={() => handleClickMenu(3)}
          active={menu === 3 ? true : false}
        />
        <MenuItem
          icon={<HomeIcon />}
          label="홈으로"
          onClick={handleClickHome}
        />
      </div>
      {menu !== -1 && <MenuDrawer menu={menu} />}
      <CustomModal
        open={modal}
        handleConfirm={handleConfirm}
        handleCancle={handleCancle}
      >
        추천 결과를 그만 보시겠습니까?
      </CustomModal>
    </>
  );
}
