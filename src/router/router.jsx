import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/home/HomePage"
import AboutUs from "../pages/AboutUs/AboutUs"
import News from "../pages/News/News"
import { ROUTES } from "./index"
import CategoryList from "../pages/CategoryList/CategoryList"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
        <Route path={ROUTES.ABOUTUS} element={<AboutUs />} />
        <Route path={ROUTES.NEWS} element={<News />} />
        <Route path="/catalog/:category/:subCategory" element={<CategoryList />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage /> }/>
      </Route>
    </Routes>
  )
}

export default AppRoutes