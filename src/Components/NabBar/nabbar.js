import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nabbar.css';
import CartWidget from 'src/Components/CartWidget/carrito.js';

function BasicExample() {
  return (
    <Navbar className="nabbar" expand="lg">
      <Container>
      <img src="./NabBar/corazon.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
        <Navbar.Brand href="#home">Mi tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nabbar">
            <Nav.Link href="#home">Artículos</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <Nav.Link href="#link">Medios de pago</Nav.Link>
            <NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div>
          <img src="./CartWidget/carrito.png" alt="carrito vacio lineas negras" width="30" height="30" id="carritoImagen">
            <CartWidget></CartWidget>
            </img>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;