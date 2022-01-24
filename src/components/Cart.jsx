import React from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext'



export const Cart = () => {
    const { cartList, vaciarCarrito, borrarItem, total, totalCantidad } = useCartContext()

    return (
        

        cartList.length === 0 ? (<div><h2>El carrito está vacío</h2> <br/><Link to='/'><button>Ir al catálogo</button></Link></div> ) : 


            <div>
                {cartList.map(prod => 
                <li key={prod.id}> <img src={prod.img} width={150} height={150} alt={prod.nombre}/> {prod.nombre} - cant: {prod.cantidad} -
                 precio: ${prod.precio}
                <button onClick={() => borrarItem(prod.id)}>Eliminar Producto</button></li>)
                }
                <div>Total Carrito: ${total()}</div>
                <div>Total unidades Carrito: {totalCantidad()}</div>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>

        
            
        
        

    )
}
