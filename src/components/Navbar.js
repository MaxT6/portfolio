import { Link } from "react-router-dom";

const Navbar = () => {
  return(
    <div className="navbar">
      <Link to="/" className="link">Home</Link>
      <Link to="/projects" className="link">Projects</Link>
      <Link to="/games" className="link">Games</Link>
    </div>
  )
}

export default Navbar