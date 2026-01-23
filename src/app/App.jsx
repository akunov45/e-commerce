import CartContext from '../context'
import AppRoutes from '../router/router'
import  { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <CartContext>
      <AppRoutes />
      <Toaster position="top-right" reverseOrder={false} />
    </CartContext>
  )
}

export default App