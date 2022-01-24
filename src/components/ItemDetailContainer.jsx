import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getFetch } from "./mock"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const {idDetalle} = useParams()
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then((resp) =>{setProducto({id: resp.id, ...resp.data() });
        
    });
    },[idDetalle])


    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer

/* 


getFetch    
        .then(resp => setProducto (resp.find(prod => prod.id === idDetalle)))


*/