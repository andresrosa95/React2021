import {Link} from 'react-router-dom'
import './NavBar.css';
import React from 'react'
import CartWidget from './CartWidget';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function NavBar() {
    return (
        <div>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Link to='/'><Navbar.Brand >CBA TECH</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to='/categoria/movilidad'>Movidilidad Eléctrica</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/notebooks'>Notebooks</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/parlantes'>Parlantes Bluetooth</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/smartphones'>Smartphones</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/smartwatches'>Smartwatches</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/tablets'>Tablets</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <Link to='/'><NavDropdown.Item ><Link to='/'>Todos los Productos</Link></NavDropdown.Item></Link>
        <NavDropdown.Divider />
        <NavDropdown.Item ><Link to='/categoria/ofertas'>OFERTAS</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Nosotros</Nav.Link>
      <Nav.Link href="#pricing">Métodos de Pago</Nav.Link>
      <Nav.Link href="#features">Envíos</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link >
      <Link to='/cart'><CartWidget/></Link>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

        </div>
    )
}

export default NavBar
