import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getFetch } from "./mock"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const {idDetalle} = useParams()

    useEffect(()=> {
        getFetch    
        .then(resp => setProducto (resp.find(prod => prod.id === idDetalle)))
    },[idDetalle])


    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer
