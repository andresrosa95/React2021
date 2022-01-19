import React from 'react'
import { useCartContext } from './CartContext'



export const Cart = () => {
    const { cartList, vaciarCarrito } =useCartContext ()

    return (
        <div>
            {cartList.map(prod => 
            <li key={prod.id}> <img src={prod.img} width={150} height={150} alt={prod.nombre}/> {prod.nombre} - cant: {prod.cantidad}</li>)
            }
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}
