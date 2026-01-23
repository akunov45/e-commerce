import { Route, Routes } from "react-router-dom"
import Layout from "../components/layout/Layout"
import HomePage from "../pages/home/HomePage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes