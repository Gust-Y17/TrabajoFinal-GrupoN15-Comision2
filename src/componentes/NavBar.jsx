import { Navbar, Nav, Container, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAutorisacion from "../hook/useAutorisacion";
import { useNavigate } from "react-router-dom";
import "../estilos/NavBar.css";

const NavBar = () => {
  const { isAuthenticat, logout, user } = useAutorisacion();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };


  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{minHeight: "56px", padding: "0.5rem 0"}} >
      <Container>
        <Navbar.Brand as={Link} to="/home">TIENDA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
            <Nav.Link as={Link} to="/crear-producto">Crear Producto</Nav.Link>
            <Nav.Link as={Link} to="/About-US">Sobre Nosotros</Nav.Link>
          </Nav>

          {isAuthenticat  &&(
          <Container>
            <span className="text-white me-2">Hola, {user?.name}</span>
            <Button variant="outline-light" size="sm" onClick={handleLogout}>
              Cerrar sesión
            </Button>
          </Container>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
