import { Plus } from 'lucide-react';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Махровый халат "Облако"',
    category: 'Халаты',
    price: '4 500',
    image: 'https://laprima.ru/netcat_files/497/1101/6a08f5e8_7f5b_11ef_bc79_00155d048d12_9f898c05_7f5b_11ef_bc79_00155d048d12.jpg',
    tag: 'New'
  },
  {
    id: 2,
    name: 'Набор полотенец (3 шт.)',
    category: 'Полотенца',
    price: '2 100',
    image: 'https://ir.ozone.ru/s3/multimedia-f/c400/6859280391.jpg',
    tag: 'Sale'
  },
  {
    id: 3,
    name: 'Ароматическая свеча',
    category: 'Декор',
    price: '950',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Тапочки из эко-меха',
    category: 'Обувь для дома',
    price: '1 200',
    image: 'https://ru-favorit.ru/item/1721678067_232.jpeg',
  }
];

const ProductList = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif text-gray-800 mb-8 text-center italic">Home Comfort Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">

              {/* Image Section */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-lg font-medium text-gray-900 mb-2 truncate">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-stone-700">{product.price} <span className='underline underline-offset-2'>c</span></span>
                  <button className="bg-stone-800 text-white p-2 rounded-full hover:bg-stone-600 transition-colors">
                   <Plus/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;