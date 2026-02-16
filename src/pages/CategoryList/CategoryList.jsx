import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, LayoutGrid, List, CheckCircle } from 'lucide-react';

const CategoryList = () => {
  const { category, subCategory } = useParams();
  console.log(category, subCategory);

  const [viewMode, setViewMode] = useState('grid');

  const products = [
    {
      id: 1,
      name: "Полотенце микрофибра 70x140",
      sku: "MH-2024-01",
      price: 250,
      minOrder: 10,
      stock: "500+ шт",
      image: "https://i.pinimg.com/1200x/1c/d7/eb/1cd7ebfea51e952638c78263f418c7d1.jpg"
    },
    {
      id: 2,
      name: "Полотенце микрофибра 70x140",
      sku: "MH-2024-01",
      price: 250,
      minOrder: 10,
      stock: "500+ шт",
      image: "https://i.pinimg.com/736x/f7/2a/6a/f72a6ab66d58cde247b03f16cb8fecde.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FA] p-4 md:p-8 text-[#2C4B72]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tight">
               {decodeURIComponent(subCategory || category || 'Каталог')}
            </h1>
          </div>

          {/* Переключатель вида */}
          <div className="flex bg-[#F2F5F7] p-1 rounded-lg border border-[#D1D9E0]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#4A707A]' : 'text-gray-400'}`}
            >
              <LayoutGrid size={20} />
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-md transition-all ${viewMode === 'table' ? 'bg-white shadow-sm text-[#4A707A]' : 'text-gray-400'}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Grid View */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-[#F2F5F7] rounded-xl border border-[#D1D9E0] overflow-hidden group hover:border-[#4A707A] transition-all">
                <div className="relative h-56 bg-gray-200 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/90 text-[10px] px-2 py-1 rounded border border-[#D1D9E0] font-bold">
                    SKU: {product.sku}
                  </div>
                </div>

                <div className="p-5 bg-white">
                  <h3 className="font-bold text-lg mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4 text-[#4A707A] text-xs font-semibold">
                    <CheckCircle size={14} /> На складе: {product.stock}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#D1D9E0] pt-4">
                    <div>
                      <span className="text-xl font-black text-[#2C4B72]">{product.price} сом</span>
                      <p className="text-[10px] text-gray-400 uppercase">Мин: {product.minOrder} шт</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        defaultValue={product.minOrder}
                        className="w-12 h-10 border border-(--color-grey) rounded-lg text-center text-sm focus:outline-[#4A707A]"
                      />
                      <button className="bg-transparent border border-(--colror-green) hover:bg-(--color-green) hover:text-white p-2 rounded-lg transition-colors">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View (B2B Style) */
          <div className="bg-white rounded-xl border border-[#D1D9E0] overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#F2F5F7] text-[#2C4B72] text-[11px] uppercase font-bold border-b border-[#D1D9E0]">
                <tr>
                  <th className="p-4">Товар / Артикул</th>
                  <th className="p-4">Наличие</th>
                  <th className="p-4">Цена</th>
                  <th className="p-4 text-center">Заказ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E0]">
                {products.map(product => (
                  <tr key={product.id} className="hover:bg-[#F7F9FA] transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <img src={product.image} className="w-14 h-14 rounded-lg object-cover border border-[#D1D9E0]" />
                        <div>
                          <div className="font-bold text-[#2C4B72]">{product.name}</div>
                          <div className="text-xs text-gray-400">Арт: {product.sku}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-medium text-[#4A707A]">{product.stock}</td>
                    <td className="p-4">
                      <div className="font-bold text-lg">{product.price} с.</div>
                      <div className="text-[10px] text-gray-400">Мин: {product.minOrder} шт</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-3">
                        <input type="number" defaultValue={product.minOrder} className="w-16 border border-[#D1D9E0] rounded p-1.5 text-center" />
                        <button className="bg-transparent border border-(--colror-green) hover:bg-(--color-green) hover:text-white p-2 rounded-lg transition-colors">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;