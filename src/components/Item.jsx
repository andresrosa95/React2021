import React from 'react'
import ItemCount from "./ItemCount";
import './Item.css';

function Item(props) {
  const producto = props.producto
    return (
<div key={producto.id} className="carta">
      <h2>{producto.nombre}</h2>
      <h3>{producto.precio}</h3>
      <img className="imgProd" src= {producto.img}  alt={producto.nombre} />
      <ItemCount min={1} max={producto.stock} /> <br />
      <button>Ver detalle</button>
      </div>
    )
}

export default Item
