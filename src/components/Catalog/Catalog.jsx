import { useState } from 'react';
import { ChevronRight, X, ArrowLeft, ShoppingBag } from 'lucide-react';

const CatalogMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // Категории на основе вашего инстаграма Munira Home
  const categories = [
    {
      id: 'towels',
      title: 'Полотенца',
      image: 'https://i.pinimg.com/736x/4c/34/63/4c3463eab48e3bc0527bc4f4290a4c25.jpg',
      items: ['Для лица', 'Банные', 'Наборы полотенец', 'Кухонные салфетки']
    },
    {
      id: 'bathrobes',
      title: 'Халаты',
      image: 'https://i.pinimg.com/736x/4f/28/cc/4f28cccbbc1736fedbe64c6a9fb3f28e.jpg',
      items: ['Мужские халаты', 'Женские халаты', 'Детские халаты', 'Микрофибра халаты']
    },
    {
      id: 'microfiber',
      title: 'Микрофибра',
      image: 'https://i.pinimg.com/736x/3f/0f/71/3f0f71dbbee13799ee7e523fb811008a.jpg',
      items: ['Для уборки', 'Сверхвпитывающие', 'Тюрбаны для волос', 'Авто-микрофибра']
    },
    {
      id: 'gifts',
      title: 'Подарки и уют',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80',
      items: ['Подарочные боксы', 'Подушки-игрушки', 'Дорожные подушки', 'Пледы']
    }
  ];

  const currentDetails = categories.find(c => c.id === activeCategory);

  return (
    <div className={`fixed inset-0 z-100 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => { setActiveCategory(null); onClose(); }}
      />

      {/* Main Container */}
      <div className={`absolute left-0 top-0 h-full flex transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        {/* ЛЕВАЯ ПАНЕЛЬ (Категории) */}
        <div className="w-screen sm:w-95 h-full bg-white shadow-xl flex flex-col border-r">
          <div className="p-6 border-b flex justify-between items-center bg-white sticky top-0">
            <h2 className="text-lg font-bold tracking-widest text-(--color-green) uppercase">Aqvela</h2>
            <button onClick={onClose} className="p-2 border transition-all
    duration-300
    ease-in-out border-(--color-green) hover:bg-(--color-green) hover:text-white rounded-full">
              <X size={24} />
            </button>
          </div>

          <nav className="overflow-y-auto flex-1 bg-white">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center justify-between px-6 py-6 border-b border-gray-50 transition-colors ${activeCategory === cat.id ? 'bg-blue-50 text-(--color-green)' : 'hover:bg-gray-50'}`}
              >
                <span className="font-medium text-lg uppercase tracking-tight">{cat.title}</span>
                <ChevronRight size={20} />
              </button>
            ))}
          </nav>
        </div>

        {/* ПРАВАЯ ПАНЕЛЬ (Подкатегории / Детали) */}
        {/* На мобилках (sm:hidden) она перекрывает основную панель */}
        <div className={`
          fixed sm:absolute top-0 left-0 sm:left-full h-full w-screen sm:w-112.5 bg-gray-50 shadow-2xl transition-all duration-300
          ${activeCategory ? 'translate-x-0 opacity-100' : 'translate-x-full sm:-translate-x-10 opacity-0 pointer-events-none'}
        `}>
          {currentDetails && (
            <div className="h-full flex flex-col">
              {/* Header for details */}
              <div className="p-6 border-b bg-white flex items-center gap-4">
                <button onClick={() => setActiveCategory(null)} className="p-2 -ml-2 hover:bg-(--color-green) border border-(--color-green) rounded-full hover:text-white">
                  <ArrowLeft size={24} />
                </button>
                <h3 className="text-xl font-bold uppercase">{currentDetails.title}</h3>
              </div>

              <div className="overflow-y-auto flex-1 p-6">
                <div className="relative overflow-hidden rounded-xl mb-8 group">
                  <img
                    src={currentDetails.image}
                    alt={currentDetails.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {currentDetails.items.map((item) => (
                    <a
                      key={item}
                      href={`/catalog/${activeCategory}/${item}`}
                      className="flex items-center justify-between p-4 bg-white rounded-lg border border-(--color-green) shadow-sm hover:border-(--color-green) transition-all group"
                    >
                      <span className="text-gray-700 font-medium group-hover:text-(--color-green)">{item}</span>
                      <ShoppingBag size={18} className="text-gray-300 group-hover:text-(--color-green)" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white border-t">
                <button className="w-full bg-(--color-green) text-white py-4 rounded-xl font-bold tracking-wide hover:bg-transparent hover:text-(--color-green) border border-(--color-green) transition-shadow shadow-lg shadow-blue-200">
                  СМОТРЕТЬ ВСЮ КОЛЛЕКЦИЮ
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogMenu;