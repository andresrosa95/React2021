import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { getFetch } from "./mock"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    useEffect(()=> {
        getFetch    
        .then(resp => setProducto (resp.find(prod => prod.id === '1')))
    },[])


    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer
