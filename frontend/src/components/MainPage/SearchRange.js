import { Slider } from "@mui/material";

function valuetext(value) {
  return `${value}`;
}

function SearchRange() {
  return (
    <div className="search__range">
      <div className="search__title">검색 범위</div>
      <Slider
        aria-label="Search range"
        defaultValue={2}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
  );
}

export default SearchRange;
