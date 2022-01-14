import React from 'react'
import { useState }from 'react'

function ItemCount({min, max, onAdd}) {
    const [count, setCount] = useState (min)

    const HandleCountPlus=()=> {
        count < max ? setCount (prev => prev + 1) : alert ('limite stock alcanzado')
}
    const HandleCountMinus=()=> {
        count > min ? setCount (prev => prev - 1) : console.log('minimo de compra')
}
    //  const AgregarCarrito=()=> {
    //      alert ('Producto agregado al Carrito')
    //  }
    return (
        <div>
                <h3> {count} </h3>
                <button onClick={HandleCountMinus}>-</button>
                <button onClick={() => onAdd(count)}> Agregar al Carrito</button>
                <button onClick={HandleCountPlus}>+</button>
        </div>
    )
}

export default ItemCount
