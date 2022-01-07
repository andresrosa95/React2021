import React from "react";
import Item from "./Item";
import './ItemList.css';

function ItemList(props) {
    const listaProd = props.listaProductos
  return (
      <div className="cartas">
    {listaProd.map((prod) => <Item key={prod.id} producto={prod} />  )}
    </div>
    
    )
  
  
  
  
  }







export default ItemList
