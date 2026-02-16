import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/home/HomePage"
import WishList from "../pages/wish-list/WishList"
import Profile from "../pages/profile/Profile"
import AboutUs from "../pages/AboutUs/AboutUs"
import News from "../pages/News/News"
import Contacts from "../pages/Contacts/Contacts"
import { ROUTES } from "./index"
import CategoryList from "../pages/CategoryList/CategoryList"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path={ROUTES.WISHLIST} element={<WishList />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path="/catalog/:category/:subCategory" element={<CategoryList />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes