import { Heart, Menu, PhoneCall, ShoppingCart, User } from 'lucide-react'
import SearchInput from '../../features/search-input/SearchInput'
import { useContext } from 'react'
import { CART_CONTEXT } from '../../context'
import { Link } from 'react-router-dom'

const HeaderBottom = () => {
  const { cart } = useContext(CART_CONTEXT)
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-4 ">

      {/* Левая часть: Меню и Лого всегда видны */}
      <div className="flex items-center gap-4">
        <button className="text-(--color-green)  md:hidden">
          <Menu />
        </button>
        <Link to={"/"} className="font-bold text-xl flex items-end gap-1">
          <span className="text-(--color-green)">MUNITEXT</span>
        </Link>
      </div>

      {/* Поиск: скрыт на мобилках, виден от md (768px) */}
      <div className="hidden md:block grow max-w-2xl mx-10">
        <SearchInput />
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Телефон: полностью скрыт на мобилках, виден от md */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer group">
          <div className="p-2 border hover:text-white hover:bg-(--color-green) border-(--color-green) rounded-lg ">
            <a href="tel:+996508886000" >
              <PhoneCall size={20} />
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-bold  leading-tight text-(--color-green)">+996 508 886 000</span>
          </div>
        </div>

        {/* Правые иконки: всегда видны */}
        <div className="flex items-center gap-4 md:gap-5 text-gray-700">
          <button className="text-(--color-green)">
            <Link to={"/wish-list"}><Heart size={24} /></Link>
          </button>
          <button className="text-(--color-green)">
            <Link to="/profile">
              <User size={24} />
            </Link>
          </button>
          <Link to={"/cart"}>
            <button className="text-(--color-green) relative">
              <ShoppingCart size={24} />
              {/* Опционально: индикатор корзины */}
              <span className="absolute -top-1 -right-1 bg-(--color-green) text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center ">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom