import {useState, useContext, createContext} from 'react'

const CartContext = createContext ([])

export function useCartContext () {
    return useContext (CartContext)
}

export const CartContextProvider = ({children}) => {    
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items) {

        const index=cartList.findIndex( i=> i.id === items.id)

        if (index > -1) {
            const countOld = cartList[index].cantidad

            cartList.splice(index, 1)
            setCartList([...cartList,{...items, cantidad: items.cantidad + countOld}])
        } else{
            setCartList ([...cartList, items])
        }
    }

    function vaciarCarrito() {
        setCartList([])
    }

    const borrarItem = (id) => {
        const itemFiltrado = cartList.filter((producto) => producto.id !== id);
        setCartList(itemFiltrado);
    }

    const total = () => {
        const totalCarrito = cartList.reduce(
            (prev, curr) => prev + curr.cantidad * curr.precio,
            0  
        );
        return totalCarrito
    };  

    const totalCantidad = () => {
        let totalCant = 0;
        cartList.forEach((producto) => {
            totalCant += producto.cantidad;
        });
        return totalCant
    };  


    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            borrarItem,
            total,
            totalCantidad,
        }}>
            {children}
        </CartContext.Provider>
    )
}