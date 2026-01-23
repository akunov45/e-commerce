import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="h-px bg-gray-700 w-full" />
      <HeaderBottom />
    </header>
  )
}

export default Header