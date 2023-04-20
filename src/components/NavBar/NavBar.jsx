import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import market from "../../assets/market.png";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid className="Container">
        <Link className="NavbarBrand" to="/">
          <img src={market} alt="Logo" />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="NavBarColapse">
          <Nav className="Nav">
            <Link to="/" className="NavLink nav-link">
              Home
            </Link>
            <Link className="nav-link" to="/notfound">
              Services
            </Link>

            <NavDropdown
              title="Cursos"
              id="basic-nav-dropdown"
              className="NavLink text-white"
            >
              <Link to="/category/frontend" className="dropdown-item">
                Frontend
              </Link>
              <Link to="/category/backend" className="dropdown-item">
                Backend
              </Link>
            </NavDropdown>
            <Link className="nav-link" to="/notfound">
              Contacto
            </Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
