import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <section>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Nav className="me-auto ps-4">
            <NavLink end className="nav-item nav-link" to="/administrador">
              Administrar
            </NavLink>
            <NavLink end className="nav-item nav-link" to="/nosotros">
              Acerca de mi 
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
        </section>
    );
};

export default Menu;