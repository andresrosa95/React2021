import './NavBar.css';
import React from 'react'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CBA TECH</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Auriculares</a>
          <a class="dropdown-item" href="#">Monitores</a>
          <a class="dropdown-item" href="#">Mouse y Teclados</a>
          <a class="dropdown-item" href="#">Movidilidad Eléctrica</a>
          <a class="dropdown-item" href="#">Notebooks</a>
          <a class="dropdown-item" href="#">Parlantes Bluetooth</a>
          <a class="dropdown-item" href="#">Smartphones</a>
          <a class="dropdown-item" href="#">Smartwatches</a>
          <a class="dropdown-item" href="#">Tablets</a>
          <a class="dropdown-item" href="#">Todos los productos</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Nosotros</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Métodos de Pago</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Envíos</a>
      </li>

    </ul>
    <span class="navbar-text">
    <CartWidget/>
    </span>
  </div>
</nav>
        </div>
    )
}

export default NavBar
