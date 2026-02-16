import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/home/HomePage"
import WishList from "../pages/wish-list/WishList"
import Profile from "../pages/profile/Profile"
import PaymentDelivery from "../pages/PaymentDelivery/PaymentDelivery"
import Refund from "../pages/Refund/Refund"
import News from "../pages/News/News"
import Contacts from "../pages/Contacts/Contacts"
import { ROUTES } from "./index"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path={ROUTES.WISHLIST} element={<WishList />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.PAYMENT_DELIVERY} element={<PaymentDelivery />} />
        <Route path={ROUTES.REFUND} element={<Refund />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.NEWS} element={<News />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes