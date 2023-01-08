import Home from "./components/Home"
// import Games from "./components/Games";
// import Navbar from "./components/Navbar";
import "./styles/App.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/games" element={<Games />} /> */}
        </Routes>
     </>   
    </Router>
  );
}

export default App;
