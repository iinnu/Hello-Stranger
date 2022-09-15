import { TextField } from '@mui/material';

function Location() {
  return (
    <div className="search__location">
      <div className="search__title title--top">검색 기준</div>
      <TextField size="small" placeholder="구미시" sx={{ width: '100%' }} />
    </div>
  );
}

export default Location;
