import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import {  Button } from 'react-bootstrap';

function Item(props) {
  const producto = props.producto;
  return (
    <div key={producto.id} className="carta">
      <h2>{producto.nombre}</h2>
      <h3>${producto.precio}</h3>
      <Link to={`/detalle/${producto.id}`}>
      <img className="imgProd" src={producto.img} alt={producto.nombre} />
      <br />
      <br />
        <Button  variant="dark">Ver Detalle</Button>
      </Link>
    </div>
  );
}

export default Item;
