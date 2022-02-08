import React from 'react';
import { useCartContext } from '../context/CartContext';


function CartWidget() {
    const {totalCantidad } =useCartContext ()
    
    return (

        <div>
            {totalCantidad() > 0 ?
            <div>
            {totalCantidad()}<img src="/assets/img/carrito.png" alt="carritoCompra" height="35" width="40" />
        </div> 
            : <img src="/assets/img/carrito.png" alt="carritoCompra" height="35" width="40" />}
        </div>



        
    )
}

export default CartWidget
