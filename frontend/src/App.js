import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx'
import EnterInfoGuide from './pages/EnterInfoGuidePage.jsx'
import EnterInfo from './pages/EnterInfoPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/guide" element={<EnterInfoGuide/>}/>
          <Route path="/info" element={<EnterInfo/>}/>
          <Route path="/main" />
          <Route path="/recommend" />
          <Route path="/history" />
          <Route path="/near" />
          <Route path="/other" />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;