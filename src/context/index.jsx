
import { createContext, useEffect, useState } from 'react'

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
      localStorage.setItem('cart', JSON.stringify(newCart))
      setCart(newCart)
      return
    }
    const product = [...cart, item]
    setCart(product)
    localStorage.setItem('cart', JSON.stringify(product))
  }

  const value = {
    cart,
    addToCart
  }

  useEffect( () => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      setCart(JSON.parse(cart))
    }
  }, [])

  return (
    <CART_CONTEXT.Provider value={value}>
      {children}
    </CART_CONTEXT.Provider>
  )
}

export default CartContext


