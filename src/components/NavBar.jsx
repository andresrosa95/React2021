import './NavBar.css';
import React from 'react'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light" >
  <a className="navbar-brand" href="#">CBA TECH</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Auriculares</a>
          <a className="dropdown-item" href="#">Monitores</a>
          <a className="dropdown-item" href="#">Mouse y Teclados</a>
          <a className="dropdown-item" href="#">Movidilidad Eléctrica</a>
          <a className="dropdown-item" href="#">Notebooks</a>
          <a className="dropdown-item" href="#">Parlantes Bluetooth</a>
          <a className="dropdown-item" href="#">Smartphones</a>
          <a className="dropdown-item" href="#">Smartwatches</a>
          <a className="dropdown-item" href="#">Tablets</a>
          <a className="dropdown-item" href="#">Todos los productos</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Nosotros</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Métodos de Pago</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Envíos</a>
      </li>

    </ul>
    <span className="navbar-text">
    <CartWidget/>
    </span>
  </div>
</nav>
        </div>
    )
}

export default NavBar
