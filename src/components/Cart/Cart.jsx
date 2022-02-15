import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import Resumen from '../Resumen/Resumen';
import { Table, Form, Button } from 'react-bootstrap';


export const Cart = () => {
    const { cartList, vaciarCarrito, borrarItem, total, totalCantidad, totalPorProducto } = useCartContext()
    const [condicion, setCondicion] = useState(false);
    const [dataForm, setdataForm] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    });

    const invalidForm = () => {
        return dataForm.name.length == 0 || dataForm.surname.length == 0 || dataForm.email.length == 0 || dataForm.checkemail.length == 0 || dataForm.checkemail != dataForm.email
    }

    const [idOrder, setIdOrder] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()
    
        if (invalidForm()) {
            alert("REVISAR DATOS")
        } else {
            let order = {}

        order.buyer = dataForm
        order.total = total();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad

            return { id, nombre, precio, cantidad }
        })


        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order)
            .then(resp => setIdOrder(resp.id))
            .catch(err => console.log(err))
            .finally(vaciarCarrito)

        const queryCollection = collection(db, 'items')

        const queryUpdateStock = query(
            queryCollection, where(documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
            ))
            .catch(err => console.log(err))


        batch.commit()
        setCondicion(true)
        }




        
    }

    
    function handleChange(e) {

        setdataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        })
    }




    return (

        

        <>

            {
                condicion ? <Resumen idOrder={idOrder} /> :
                    cartList.length === 0 ? (<div><h2>El carrito está vacío</h2> <br /><Link to='/'><button>Ir al catálogo</button></Link></div>) :

                        <div>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Imagen</th>
      <th>Producto</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th colSpan={2}>Precio Total</th>
    </tr>
  </thead>

  {cartList.map(prod =>                
  <tbody key={prod.id}>
    <tr>
      <td><img src={prod.img} width={100} height={100} alt={prod.nombre} /></td>
      <td>{prod.nombre}</td>
      <td>${prod.precio}</td>
      <td>{prod.cantidad}</td>
      <td>${prod.cantidad * prod.precio}</td>
      <td><button onClick={() => borrarItem(prod.id)}>Eliminar Producto</button></td>
    </tr>

  </tbody>
                            )
                            }
    <thead>
    <tr>
      <th colSpan={3}>TOTALES COMPRA</th>
      <th>{totalCantidad()}</th>
      <th>${total()}</th>
      <th><button onClick={vaciarCarrito}>Vaciar Carrito</button></th>
    </tr>
  </thead>
                            </Table>     

                            <Form onSubmit={realizarCompra}>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Nombre</Form.Label>
    <Form.Control type="text" placeholder="Nombre" name='name' onChange={handleChange} value={dataForm.name}/>
    <Form.Label>Apellido</Form.Label>
    <Form.Control type="text" placeholder="Apellido" name='surname' onChange={handleChange} value={dataForm.surname}/>
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="E-Mail" name='email' onChange={handleChange} value={dataForm.email}/>
    <Form.Label>Repetir E-mail</Form.Label>
    <Form.Control type="email" placeholder="Repetir E-mail" name='checkemail' onChange={handleChange} value={dataForm.checkemail}/>
    <Form.Text className="text-muted">
      No compartiremos tus datos con nadie.
    </Form.Text>
  </Form.Group>                        

  <Button variant="success" type="submit" onClick={realizarCompra}>Realizar Compra</Button><Link to='/'><Button  variant="dark">Volver al Inicio</Button></Link>
  <br />
  <br />
</Form>
                        </div>


            }


        </>





    )
}
