import {useEffect} from "react"
import "styles/App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "pages/LoginPage.jsx";
import HistoryPage from "pages/HistoryPage.jsx";
import History from 'components/History/History'
import NearAnalysisPage from "pages/NearAnalysisPage.jsx";
import OtherUserPage from "pages/OtherUserPage.jsx";

function App() {

  // https://velog.io/@eunddodi/React-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%9B%B9-%EC%95%B1-100vh-%EC%8B%A4%EC%A0%9C-%ED%99%94%EB%A9%B4-%ED%81%AC%EA%B8%B0%EB%A1%9C-%EB%A7%9E%EC%B6%94%EA%B8%B0
  // 모바일에서 100vh를 쓰기위한 방법
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginButton />} />
          <Route path="/guide" />
          <Route path="/info" />
          <Route path="/main" />
          <Route path="/recommend" />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/history/:historyId" element={<History/>} />
          <Route path="/near" element={<NearAnalysisPage/>} />
          <Route path="/other" element={<OtherUserPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
