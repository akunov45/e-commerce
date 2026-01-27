
import { createContext, useState } from 'react'

export const CART_CONTEXT = createContext()

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    item.quantity = 1
    if (cart.find(i => i.id === item.id)) {
      const newCart = cart.map(i => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + 1
          }
        }
        return i
      })
      setCart(newCart)
      return
    }
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