import { createContext, useReducer, useState } from 'react'

import { cartInfoReducer, initialStateCartInfo } from '../utils/helpers'

const CartContext = createContext(null)

export  function CartBookingContext({ children }) {
    const [cartInfoState , dispatchCartInfo] = useReducer(cartInfoReducer ,initialStateCartInfo)
    
    const [cartItems, setCartItems] = useState([...JSON.parse(localStorage.getItem("cartItems")) || []])
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    
    
    return (
        <CartContext.Provider value={{ cartItems, setCartItems , cartInfoState , dispatchCartInfo}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

