import BookmarkIcon from '@mui/icons-material/Bookmark';
import HomeIcon from '@mui/icons-material/Home';
import MenuItem from './MenuItem';

export default function RightMenu() {
  return (
    <div className="recommend-result-map__menu menu--right">
      <MenuItem icon={<BookmarkIcon />} label="일정저장" />
      <MenuItem icon={<HomeIcon />} label="홈으로" />
    </div>
  );
}
