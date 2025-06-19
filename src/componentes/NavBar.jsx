import { Navbar, Nav, Container, Button  } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAutorisacion from "../hook/useAutorisacion";
import "../estilos/NavBar.css";

const NavBar = () => {
  const { isAuthenticat, logout, user, login } = useAutorisacion();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const handleLogin = () => {
    navigate("/"); 
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
            <Nav.Link as={Link} to="/About-Us">Sobre Nosotros</Nav.Link>

            {isAuthenticat && user?.rol === "ADMINISTRATIVO" && (
                <Nav.Link as={Link} to="/crear-producto">Crear Producto</Nav.Link>
            )}

          </Nav>

          <Nav className="ms-auto">
            {!isAuthenticat ? (
              <Button variant="outline-light" onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            ) : (
              <Button variant="outline-light" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
            )}
          </Nav>

           <Nav.Link onClick={() => {
              const footer = document.getElementById("contactanos")
                footer.scrollIntoView({behavior: "smooth"})
              }}>Contactanos</Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
