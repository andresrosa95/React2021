import React from 'react'
import carrito from '../assets/img/carrito.png'

function CartWidget() {
    return (
        <div>
            <img src={carrito} alt="carritoCompra" height="35" width="40" />
        </div>
    )
}

export default CartWidget
