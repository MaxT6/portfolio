import Home from "./components/Home"
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const backgroundImage = new URL("./images/portfolio-background.jpg", import.meta.url)

function App() {
  return (
    <Router>
      <div className="background">
        <div className="Navbar">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
            </Routes>
          </div>
        </div>
     </div>   
    </Router>
  );
}

export default App;
