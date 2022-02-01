import React from "react";
import { useState, useEffect } from "react";
import { getFetch } from "./mock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategoria} = useParams()

  useEffect(() => { 

    if (idCategoria) {

      const db = getFirestore()
      const queryCollection = query(collection(db, 'items'), where ('categoria', '==', idCategoria));
      getDocs(queryCollection).then((res) =>
      setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      ) .finally(() => {setLoading(false)})

    } else {

      const db = getFirestore()
    const queryCollection = collection(db, 'items');
    getDocs(queryCollection).then((res) =>
    setProductos(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
    ) .finally(() => {setLoading(false)})

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


/*

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


*/ 
