
import { createContext, useState } from 'react'

export const CART_CONTEXT = createContext()

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const value = {
    cart,
    addToCart
  }
  return (
    <CART_CONTEXT.Provider value={value}>
      {children}
    </CART_CONTEXT.Provider>
  )
}

export default CartContext