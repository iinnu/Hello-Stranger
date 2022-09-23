import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryPage from 'pages/HistoryPage';
import NearAnalysisPage from 'pages/NearAnalysisPage';
import DetailInfoPage from 'pages/DetailInfoPage';
import MainPage from 'pages/MainPage';
import LoginPage from './pages/LoginPage.jsx';
import EnterInfoGuide from './pages/EnterInfoGuidePage.jsx';
import EnterInfo from './pages/EnterInfoPage.jsx';
import RecommendPage from 'pages/RecommendPage.jsx';
import RecommendResultPage from 'pages/RecommendResultPage.jsx';
import { RecommendProvider } from 'components/Recommend/Context/RecommendContext.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/guide" element={<EnterInfoGuide />} />
          <Route path="/info" element={<EnterInfo />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/recommend" element={<RecommendProvider />}>
            <Route path="result" element={<RecommendResultPage />} />
            <Route path="" element={<RecommendPage />} />
          </Route>
          <Route path="/result" element={<RecommendResultPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/history/:id" element={<DetailInfoPage />} />
          <Route path="/near" element={<NearAnalysisPage />} />
          <Route path="/other" element={<DetailInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
