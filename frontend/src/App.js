import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from './pages/LoginPage.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginButton/>}/>
          <Route path="/guide" />
          <Route path="/info" />
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