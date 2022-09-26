import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const CustomLoading = styled(CircularProgress)`
  &.MuiCircularProgress-root {
    color: gray;
  }
`;

function usePullToRefresh() {
  const div = useRef(null);
  const loading = useRef(null);
  const touchStartY = useRef(0);
  const loadingHeight = useRef(0);

  const MAX_HEIGHT = 60;

  function init() {
    div.current.removeChild(loading.current);
    loading.current = null;
    loadingHeight.current = 0;
    touchStartY.current = 0;
  }

  function handleTouchStart(e) {
    if (div.current?.scrollTop !== 0) return;

    touchStartY.current = e.changedTouches[0].screenY;
    const el = document.createElement('div');
    el.classList.add('loading-element');
    div.current.prepend(el); // 스크롤되는 요소의 최상단에 추가
    loading.current = el;
  }

  function handleTouchMove(e) {
    if (div.current?.scrollTop !== 0) return;
    // 로딩 요소가 있으면
    if (loading.current) {
      const screenY = e.changedTouches[0].screenY;
      const height = Math.floor((screenY - touchStartY.current) * 0.3);
      // height가 0보다 크면
      if (height >= 0) {
        loading.current.style.height = `${height}px`;
        loadingHeight.current = height;
      }
    }
  }

  function handleTouchEnd() {
    if (div.current?.scrollTop !== 0) return;
    // 로딩 요소의 높이가 MAX_HEIGHT보다 크면
    if (loadingHeight.current >= MAX_HEIGHT) {
      // 로딩표시 해주고
      loading.current.style.paddingTop = '10px';
      const el = ReactDOM.createRoot(loading.current);
      el.render(<CustomLoading />);
      setTimeout(() => {
        init();
      }, 1000);
    } else {
      init();
    }
  }

  return { div, handleTouchStart, handleTouchMove, handleTouchEnd };
}

export default usePullToRefresh;
