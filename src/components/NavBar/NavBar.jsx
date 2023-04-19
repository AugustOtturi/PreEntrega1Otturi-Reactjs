import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import market from "../../assets/market.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <Navbar expand="lg" className="Navbar">
      <Container fluid className="Container">
        <Navbar.Brand href="#home" className="NavbarBrand">
          <img src={market} alt="Logo" className="w-50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="NavBarColapse">
          <Nav className="Nav">
            <Nav.Link href="#home" className="NavLink">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="NavLink">
              Service
            </Nav.Link>
            <NavDropdown
              title="Catalogo"
              id="basic-nav-dropdown"
              className="NavLink text-white"
            >
              <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
              <NavDropdown.Item href="#productos">Productos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto" className="NavLink">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
