import {useState, useContext, createContext} from 'react'

const CartContext = createContext ([])

export function useCartContext () {
    return useContext (CartContext)
}

export const CartContextProvider = ({children}) => {    
    const {cartList, setCartList} = useState([])

    function agregarAlCarrito(items) {
        setCartList ([...cartList, items])
    }

    function vaciarCarrito() {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}