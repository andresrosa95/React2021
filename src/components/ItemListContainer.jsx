import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "./mock";
import ItemList from "./ItemList";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  console.log(productos);

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
