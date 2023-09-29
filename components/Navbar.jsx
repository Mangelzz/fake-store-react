import { Link } from "react-router-dom";
import "../src/styles/navbar.css"

const Navbar = () => {
  return (
    <header>
      <nav className="nav">
        <div>Logo</div>
        <div className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={'/cart'}>Cart</Link>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
