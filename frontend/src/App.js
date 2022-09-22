import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HistoryPage from 'pages/HistoryPage';
import NearAnalysisPage from 'pages/NearAnalysisPage';
import DetailInfoPage from 'pages/DetailInfoPage';
import MainPage from 'pages/MainPage';
import LoginPage from './pages/LoginPage.jsx';
import EnterInfoGuide from './pages/EnterInfoGuidePage.jsx';
import EnterInfoGuideFirst from './components/EnterInfoGuide/EnterInfoGuideFirst.jsx';
import EnterInfoGuideSecond from './components/EnterInfoGuide/EnterInfoGuideSecond';
import EnterInfoGuideThird from './components/EnterInfoGuide/EnterInfoGuideThird';
import EnterInfoGuideForth from './components/EnterInfoGuide/EnterInfoGuideForth';
import EnterInfo from './pages/EnterInfoPage.jsx';
import EnterInfoMusic from './components/EnterInfo/EnterInfoMusic.jsx';
import EnterInfoFood from './components/EnterInfo/EnterInfoFood.jsx';
import EnterInfoActivity from './components/EnterInfo/EnterInfoActivity';
import StartApp from 'components/EnterInfo/StartApp.jsx'
import RecommendPage from 'pages/RecommendPage.jsx';
import RecommendResultPage from 'pages/RecommendResultPage.jsx';
import { RecommendProvider } from 'components/Recommend/RecommendContext.jsx';

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
          <Route path="/guide/first" element={<EnterInfoGuideFirst />} />
          <Route path="/guide/second" element={<EnterInfoGuideSecond />} />
          <Route path="/guide/third" element={<EnterInfoGuideThird />} />
          <Route path="/guide/forth" element={<EnterInfoGuideForth />} />
          <Route path="/info/music" element={<EnterInfoMusic />} />
          <Route path="/info/food" element={<EnterInfoFood />} />
          <Route path="/info/activity" element={<EnterInfoActivity />} />
          <Route path="/info/start" element={<StartApp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
