
const Footer = () => {
  return (
    <footer className="text-(--color-grey) bg-(--color-green)">
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4 sm:grid-cols-2">

        {/* Logo + about */}
        <div>
          <h2 className="text-xl flex items-center gap-2 font-semibold text-white mb-4">
            <span>
              Aqvela
            </span>
          </h2>
          <p className="text-sm leading-relaxed ">
            Современный e-commerce магазин. Качество, скорость и стиль —
            без лишних слов.
          </p>
        </div>

        {/* Catalog */}
        <div>
          <h3 className="text-sm font-semibold  mb-4 uppercase tracking-wide">
            Каталог
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-(--color-orange) transition">Новинки</li>
            <li className="hover:text-(--color-orange)  transition">Хиты продаж</li>
            <li className="hover:text-(--color-orange)  transition">Скидки</li>
            <li className="hover:text-(--color-orange)  transition">Категории</li>
          </ul>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
            Информация
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-(--color-orange) transition">О нас</li>
            <li className="hover:text-(--color-orange) transition">Оплата</li>
            <li className="hover:text-(--color-orange) transition">
              Поставки по всем странам СНГ
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Подписка
          </h3>
          <p className="text-sm mb-4">
            Получай скидки и новости первым
          </p>
          <a
            href="https://chat.whatsapp.com/+996508886000"
            target="_blank"
            className="
    flex items-center justify-between
    w-full
    rounded-md
    overflow-hidden
  "
          >
            <span className=" py-2 text-sm ">
              Акции и новинки в WhatsApp
            </span>
            <span className="
    px-4 py-2
    border
    hover:border-(--color-orange)
    text-sm
    font-semibold
    hover:opacity-90
    transition
    rounded-md
  ">
              Перейти
            </span>
          </a>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-(--color-grey) py-4 text-center text-sm text-(--color-grey)">
        © {new Date().getFullYear()} Aqvela. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
