import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginButton from './pages/LoginPage.jsx'
import MainPage from 'pages/MainPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"></Navigate>} />
          <Route path="/login" />
          <Route path="/guide" />
          <Route path="/info" />
          <Route path="/main" element={<MainPage />} />
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