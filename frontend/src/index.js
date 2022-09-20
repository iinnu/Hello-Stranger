import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function setScreenSize() {
  // 1vh == 화면 높이의 1%
  // 뷰포트 높이 얻고 vh 단위 얻기
  let vh = window.innerHeight * 0.01;
  // --vh 사용자 정의 속성 값을 문서의 루트로 설정
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);