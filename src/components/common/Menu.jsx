import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <section>

        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
          <Nav className="me-auto ps-4">
            <Nav.Link to="/administrador">Administrador</Nav.Link>
            <Nav.Link to="/author">Acerca de mi</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </section>
    );
};

export default Menu;