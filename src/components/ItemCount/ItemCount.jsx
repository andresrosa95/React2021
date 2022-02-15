import React from 'react'
import { useState }from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ItemCount({min, max, onAdd, }) {
    const [count, setCount] = useState (min)

    const HandleCountPlus=()=> {
        count < max ? setCount (prev => prev + 1) : alert ('limite stock alcanzado')
}
    const HandleCountMinus=()=> {
        count > min ? setCount (prev => prev - 1) : console.log('minimo de compra')
}
    return (
        <div>
            
                <h3> {count} </h3>
                <Button variant="outline-dark" onClick={HandleCountMinus}>-</Button>
                <Button  onClick={() => onAdd(count)}variant="dark">Agregar al Carrito</Button>
                <Button variant="outline-dark" onClick={HandleCountPlus}>+</Button>
                <br />
                <Link to='/'><Button  variant="dark">Volver al Inicio</Button></Link>
        </div>
    )
}

export default ItemCount
