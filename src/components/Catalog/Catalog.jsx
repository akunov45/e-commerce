import React, { useState } from 'react';
import { ChevronRight, X, ArrowLeft } from 'lucide-react';

const CatalogMenu = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      id: 'bedding',
      title: 'Постельное белье',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=200&q=80',
      items: ['Комплекты (Satin)', 'Наволочки', 'Пододеяльники', 'Простыни на резинке', 'Детское постельное']
    },
    {
      id: 'bath',
      title: 'Для ванной',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80',
      items: ['Полотенца махровые', 'Банные халаты', 'Коврики для ванной', 'Наборы для сауны', 'Полотенца для лица']
    },
    {
      id: 'living',
      title: 'Уютный дом',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=200&q=80',
      items: ['Пледы', 'Декоративные подушки', 'Скатерти', 'Шторы и тюль', 'Ароматы для дома']
    },
    {
      id: 'homewear',
      title: 'Домашняя одежда',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=200&q=80',
      items: ['Пижамы', 'Тапочки', 'Трикотажные костюмы', 'Маски для сна']
    }
  ];

  const currentDetails = categories.find(c => c.id === activeCategory);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'visible' : 'invisible'}`}>
      {/* Затемнение фона */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => { setActiveCategory(null); onClose(); }}
      />

      {/* Основная панель меню */}
      <div className={`absolute left-0 top-0 h-full w-[350px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        <div className="p-6 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">КАТАЛОГ</h2>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors shadow-sm">
            <X size={20} />
          </button>
        </div>

        <nav className="flex flex-col h-full bg-white">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveCategory(cat.id)} // Открывается при наведении (для десктопа)
              onClick={() => setActiveCategory(cat.id)}      // Или при клике
              className={`flex items-center justify-between px-6 py-5 border-b border-gray-50 transition-all ${activeCategory === cat.id ? 'bg-amber-50 text-amber-900' : 'hover:bg-gray-50'}`}
            >
              <span className="font-semibold text-lg">{cat.title}</span>
              <ChevronRight size={20} className={activeCategory === cat.id ? 'translate-x-1' : ''} />
            </button>
          ))}
        </nav>

        {/* ПАНЕЛЬ ДЕТАЛЕЙ (Выезжает справа от основного меню) */}
        <div className={`absolute top-0 left-full h-full w-[350px] bg-gray-50 shadow-2xl transition-all duration-300 border-l border-gray-100 ${activeCategory ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0 pointer-events-none'}`}>
          {currentDetails && (
            <div className="p-8">
              <div className="flex items-center gap-2 mb-8 text-amber-700 md:hidden" onClick={() => setActiveCategory(null)}>
                <ArrowLeft size={18} /> <span>Назад</span>
              </div>

              <img
                src={currentDetails.image}
                alt={currentDetails.title}
                className="w-full h-40 object-cover rounded-lg mb-6 shadow-md"
              />

              <h3 className="text-2xl font-bold mb-6 text-gray-800">{currentDetails.title}</h3>

              <ul className="space-y-4">
                {currentDetails.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black hover:font-bold transition-all text-lg block">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <button className="mt-12 w-full border-2 border-black py-3 font-bold hover:bg-black hover:text-white transition-colors">
                СМОТРЕТЬ ВСЁ
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatalogMenu;