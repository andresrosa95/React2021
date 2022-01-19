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

    console.log(cartList)

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