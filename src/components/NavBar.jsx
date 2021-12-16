import './NavBar.css';
import React from 'react'

function NavBar() {
    return (
        <div>
            <h2 className="tituloNav">COMPRÁ DIVISAS SIN LIMITE</h2>
            <nav className="menu">
  <ul>
    <li><a href="#">Dolar</a></li>
    <li><a href="#">Euro</a></li>
    <li><a href="#">Real</a></li>
  </ul>
</nav>
        </div>
    )
}

export default NavBar
