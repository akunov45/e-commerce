
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'
import Catalog from '../Catalog/Catalog'
import { useState } from 'react'

const Layout = () => {
  const [showCatalog, setShowCatalog] = useState(false);

  const toggleCatalog = () => {
    setShowCatalog(!showCatalog);
  };

  return (
    <div>
      <Header toggleCatalog={toggleCatalog} />
       {showCatalog && <Catalog isOpen={showCatalog} onClose={toggleCatalog} />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout