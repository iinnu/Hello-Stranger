import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import CustomModal from 'components/common/CustomModal';
import MenuItem from './MenuItem';

export default function RightMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickHome = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    navigate('/main');
  };

  const handleCancle = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="recommend-result-map__menu menu--right">
        <MenuItem icon={<BookmarkIcon />} label="일정저장" />
        <MenuItem
          icon={<HomeIcon />}
          label="홈으로"
          onClick={handleClickHome}
        />
      </div>
      <CustomModal
        open={open}
        handleConfirm={handleConfirm}
        handleCancle={handleCancle}
      >
        추천 결과를 닫으시겠습니까?
      </CustomModal>
    </>
  );
}
