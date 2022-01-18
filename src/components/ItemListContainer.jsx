import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "./mock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategoria} = useParams()

  useEffect(() => { 

    if (idCategoria) {
      getFetch
      .then((resp) => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    } else {
      getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));  
    }
    
  }, [idCategoria]);

  return (
    <div>
      {loading ?
        <h2>Cargando...</h2>
      : <ItemList listaProductos={productos}/> 
}
    </div>
  );
}

export default ItemListContainer;
