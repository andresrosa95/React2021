import React from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

function ItemList(props) {
    const listaProd = props.listaProductos
  return (
      
    listaProd.map((prod) => <Item producto={prod} />




  ))}


export default ItemList
