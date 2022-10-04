import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Logo from '../assets/Img/logo.png';


export default function NavBar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    
    
    return (
      <Navbar className="navbar">
        <Navbar.Brand className="">
          <img width="100" src={Logo} alt="pokemon-logo" />
        </Navbar.Brand>
        <div className="d-flex link">
          <NavLink end className={setActiveClass} to="/">
            Home
          </NavLink>

          <NavLink className={setActiveClass} to="/pokemones">
            Pokemones
          </NavLink>
        </div>
      </Navbar>
    );
}

