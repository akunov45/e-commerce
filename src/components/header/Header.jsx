import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = ({ toggleCatalog }) => {
  return (
    <header>
      <HeaderTop />
      <div className="h-p w-full" />
      <HeaderBottom toggleCatalog={toggleCatalog} />
    </header>
  )
}

export default Header