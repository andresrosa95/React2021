import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategoria} = useParams()

  useEffect(() => { 

    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryfilter = idCategoria ? query(queryCollection, where ('categoria', '==', idCategoria) ) : queryCollection

      getDocs(queryfilter)
      .then((res) =>
      setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
      .finally(() => setLoading(false))
    
    
  }, [idCategoria]);

  return (
    <div>
      {loading ?
        <div><img src="/assets/img/loading.gif" alt="carritoCompra" /></div>
      : <ItemList listaProductos={productos}/> 
}
    </div>
  );
}

export default ItemListContainer;
