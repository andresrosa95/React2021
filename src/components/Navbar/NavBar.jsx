import {Link} from 'react-router-dom'
import './NavBar.css';
import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';

function NavBar() {
    return (
        <div>
<div className="App"><h1>CORDOBA TECH</h1></div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container >
  <Link to='/'><Navbar.Brand >CBA TECH</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavDropdown  title="Productos" id="collasible-nav-dropdown">
        <NavDropdown.Item ><Link to='/categoria/movilidad' className='link'>Movidilidad Eléctrica</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/notebooks' className='link'>Notebooks</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/parlantes' className='link'>Parlantes Bluetooth</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/smartphones' className='link'> Smartphones</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/smartwatches' className='link'>Smartwatches</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/categoria/tablets' className='link'>Tablets</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <Link to='/'><NavDropdown.Item ><Link to='/' className='link'>Todos los Productos</Link></NavDropdown.Item></Link>
      </NavDropdown>
      <Nav.Link href="#nosotros">Nosotros</Nav.Link>
      <Nav.Link href="#metodopago">Métodos de Pago</Nav.Link>
      <Nav.Link href="#envios">Envíos</Nav.Link>
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
