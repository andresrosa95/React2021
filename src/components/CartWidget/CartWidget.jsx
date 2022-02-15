import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css';

function CartWidget() {
    const {totalCantidad } =useCartContext ()
    
    return (

        <div >
            {totalCantidad() > 0 ?
            <div ><div className='circulo' >{totalCantidad()}</div><img src="/assets/img/carrito.png" alt="carritoCompra" height="35" width="40" /></div>
            : <img src="/assets/img/carrito.png" alt="carritoCompra" height="30" width="35" />}
        </div>



        
    )
}

export default CartWidget
