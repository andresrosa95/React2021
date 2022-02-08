import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../context/CartContext'
import { addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import Resumen from './Resumen/Resumen';


export const Cart = () => {
    const { cartList, vaciarCarrito, borrarItem, total, totalCantidad } = useCartContext()
    const [condicion, setCondicion] = useState(false);
    const [dataForm, setdataForm] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [idOrder, setIdOrder] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()
        let order = {}

        order.buyer = dataForm
        order.total = total();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return {id, nombre, precio, cantidad}
        })
        console.log(order)



        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(vaciarCarrito)

        const queryCollection = collection(db, 'items')

        const queryUpdateStock = query(
            queryCollection, where ( documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
        })
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicion(true)
    }
    
    function handleChange(e) {

        setdataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        })
    }
    console.log(dataForm)
    return (

        <>
        {
            condicion ?     <Resumen  idOrder={idOrder}/>     : 
            cartList.length === 0 ? (<div><h2>El carrito está vacío</h2> <br/><Link to='/'><button>Ir al catálogo</button></Link></div> ) : 

            <div>
                {cartList.map(prod => 
                <li key={prod.id}> <img src={prod.img} width={150} height={150} alt={prod.nombre}/> {prod.nombre} - cant: {prod.cantidad} -
                precio: ${prod.precio} 
                <button onClick={() => borrarItem(prod.id)}>Eliminar Producto</button><br/><br/></li> )
                }
                <div>Total Carrito: ${total()}</div>
                <div>Total unidades Carrito: {totalCantidad()}</div>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>

                <form onSubmit={realizarCompra}>

                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    onChange={handleChange}
                    value={dataForm.name}
                    />
                <br />
                <input
                    type='text'
                    name='phone'
                    placeholder='tel'
                    onChange={handleChange}
                    value={dataForm.phone}
                    />
                <br />
                <input
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={handleChange}
                    value={dataForm.email}
                    />
                <br />
                <input
                    type='email'
                    name='reemail'
                    placeholder='repetir email'
                    onChange={handleChange}
                    value={dataForm.email}
                    />
                <br />             
                <button onClick={realizarCompra}>Generar Orden</button>
                </form>   

                {/* <button onClick={realizarCompra}>Realizar Compra</button> */}
            </div>


        }


            </>
        
            
        
        

    )
}
