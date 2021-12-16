import './NavBar.css';
import React from 'react'

function NavBar() {
    return (
        <div>
            <h2 className="tituloNav">CURSO REACT - NAV BAR</h2>
            <nav className="menu">
  <ul>
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Nosotros</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>
        </div>
    )
}

export default NavBar
