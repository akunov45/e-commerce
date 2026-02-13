import { Plus, ShoppingBag } from 'lucide-react';
import  { useContext } from 'react';
import toast from "react-hot-toast";
import { CART_CONTEXT } from '../../context';

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
    tag: 'Hit'
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
  const { addToCart } = useContext(CART_CONTEXT)

  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container  mx-auto">
        <h2 className="text-3xl font-serif text-(--color-green) mb-8 text-center italic">Home Comfort Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-(--color-white-cloud) rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-(--color-grey)  flex flex-col h-full">
              {/* Секция изображения */}
              <div className="relative aspect-3/4 overflow-hidden ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-(--color-green) text-white  backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm z-10">
                    {product.tag}
                  </span>
                )}
              </div>

              {/* Секция контента */}
              <div className="p-6 flex flex-col grow justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-0.5 border rounded border-(--color-grey) text-[10px]  uppercase tracking-[0.15em] font-medium">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-(--color-green) mb-4 leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-bold text-(--color-green) tracking-tight">
                    {product.price} <span className="underline underline-offset-4 decoration-[0.5px] font-light">с</span>
                  </span>

                  <button
                    onClick={() => {
                      addToCart(product);
                      toast.success('Товар добавлен в корзину');
                    }}
                    className=" border border-(--color-green) hover:bg-(--color-green) hover:text-white p-3 rounded-xl  transition-all duration-300 transform hover:-translate-y-1 active:scale-90 shadow-sm"
                    aria-label="Добавить в корзину"
                  >
                    {/* Используем ShoppingBag для более "дорогого" вида */}
                    <ShoppingBag size={20} strokeWidth={2} />
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