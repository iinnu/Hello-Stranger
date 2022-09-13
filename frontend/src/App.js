import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "pages/LoginPage.jsx";
import HistoryPage from "pages/HistoryPage.jsx";
import NearAnalysisPage from "pages/NearAnalysisPage.jsx";
import OtherUserPage from "pages/OtherUserPage.jsx";

function App() {
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
          <Route path="/near" element={<NearAnalysisPage/>} />
          <Route path="/other" element={<OtherUserPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
