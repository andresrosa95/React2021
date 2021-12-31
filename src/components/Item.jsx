import React from 'react'
import ItemCount from "./ItemCount";

function Item(props) {
  const producto = props.producto
  console.log(producto.img)
    return (
<div key={producto.id}>
        <div className="card">
          <img src= {producto.img} width={600} height={400} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <p className="card-text">
Texto de prueba
            </p>
            <ItemCount min={1} max={producto.stock} />
            <br />
            <a href="" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>
      </div>
    )
}

export default Item
