import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useCartContext()
    const [show, setShow] = useState (true)


    const onAdd = (count) => {
        agregarAlCarrito({...producto, cantidad: count})
        setShow(false);
        // alert(`${count}`)
    }

    return (
        <div>
            <h1>{producto.nombre} </h1>
            <img src={producto.img} width={450} height={450} alt={producto.nombre}/> <br />
            <h3>{producto.info}</h3>
            <h2>${producto.precio}</h2>

            { producto.stock > 0 ? <div>{show ? <ItemCount min={1} max={producto.stock} onAdd={onAdd}/> : 
            <div> 
                <Link to='/cart'><button>Ver Carrito</button></Link>
                <Link to='/'><button>Seguir Comprando</button></Link>
            </div>}</div> :
                <h1>producto SIN stock </h1>}



            
            
            
            <br />
            <h3>Stock: {producto.stock} unidades</h3><br />
        </div>
    )
}



export default ItemDetail
