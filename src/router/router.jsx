import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/home/HomePage"
import CartPage from "../pages/cart/CartPage"
import WishList from "../pages/wish-list/WishList"
import Profile from "../pages/profile/Profile"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes