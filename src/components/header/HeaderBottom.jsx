import { Heart, Menu, PhoneCall, ShoppingCart, User } from 'lucide-react'
import SearchInput from '../../features/search-input/SearchInput'

const HeaderBottom = () => {
  return (
    <div className="container mx-auto flex items-center justify-between px-4 md:px-6 py-4 bg-white">

      {/* Левая часть: Меню и Лого всегда видны */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700">
          <Menu />
        </button>
        <div className="font-bold text-xl flex items-end gap-1">
          <img className='w-10' src="/logo-2.png" alt="" />
          <span>MINURA</span>
        </div>
      </div>

      {/* Поиск: скрыт на мобилках, виден от md (768px) */}
      <div className="hidden md:block grow max-w-2xl mx-10">
        <SearchInput />
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* Телефон: полностью скрыт на мобилках, виден от md */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer group">
          <div className="p-2 border border-gray-200 rounded-lg group-hover:bg-gray-50">
            <PhoneCall size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 leading-tight">+996 555 770 878</span>
          </div>
        </div>

        {/* Правые иконки: всегда видны */}
        <div className="flex items-center gap-4 md:gap-5 text-gray-700">
          <button className="hover:text-orange-500">
            <Heart size={24} />
          </button>
          <button className="hover:text-orange-500">
            <User size={24} />
          </button>
          <button className="hover:text-orange-500 relative">
            <ShoppingCart size={24} />
            {/* Опционально: индикатор корзины */}
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center md:hidden">
              0
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom