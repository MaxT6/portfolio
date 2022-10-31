import Home from "./components/Home"
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
