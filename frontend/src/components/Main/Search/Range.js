import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { useMainDispatch, useMainState } from '../MainContext';

const PrettoSlider = styled(Slider)({
  color: '#92B4EC',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    fontWieght: 600,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#92B4EC',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

function Range() {
  const { range } = useMainState();
  const dispatch = useMainDispatch();

  const handleChange = (event, value) => {
    dispatch({ type: 'range', range: value });
  };

  return (
    <div className="search__range">
      <div className="search__title">검색 범위 (km)</div>
      <PrettoSlider
        aria-label="Search range"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        value={range}
        onChange={handleChange}
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
  );
}

export default Range;
