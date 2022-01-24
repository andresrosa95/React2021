import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const producto = props.producto;
  return (
    <div key={producto.id} className="carta">
      <h2>{producto.nombre}</h2>
      <h3>${producto.precio}</h3>
      <img className="imgProd" src={producto.img} alt={producto.nombre} />
      <br />
      <br />
      <Link to={`/detalle/${producto.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
}

export default Item;
