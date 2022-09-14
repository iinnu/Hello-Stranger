import { TextField } from "@mui/material";

function SearchLocation() {
  return (
    <div className="search__location">
      <div className="search__title">검색 기준 위치</div>
      <TextField size="small" placeholder="구미시" sx={{width: "100%"}}/>
    </div>
  );
}

export default SearchLocation;
