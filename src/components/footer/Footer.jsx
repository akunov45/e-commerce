
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4 sm:grid-cols-2">

        {/* Logo + about */}
        <div>
          <h2 className="text-xl flex items-center gap-2 font-semibold text-white mb-4">
            <img className="w-12" src="/logo-2.png" alt="" />
            <span>
              MINURA
            </span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Современный e-commerce магазин. Качество, скорость и стиль —
            без лишних слов.
          </p>
        </div>

        {/* Catalog */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Каталог
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Новинки</li>
            <li className="hover:text-white transition">Хиты продаж</li>
            <li className="hover:text-white transition">Скидки</li>
            <li className="hover:text-white transition">Категории</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Информация
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">О нас</li>
            <li className="hover:text-white transition">Доставка</li>
            <li className="hover:text-white transition">Оплата</li>
            <li className="hover:text-white transition">Контакты</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Подписка
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Получай скидки и новости первым
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white text-sm rounded-r-md hover:bg-orange-600 transition"
            >
              OK
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Minura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
