import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="h-p w-full" />
      <HeaderBottom />
    </header>
  )
}

export default Header