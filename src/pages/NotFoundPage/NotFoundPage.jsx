import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-(--color-body) px-6 py-12">
      {/* SEO Title (скрытый для визуального интерфейса, но важный для роботов) */}
      <h1 className="sr-only">Ошибка 404 — Страница не найдена | Aqvela</h1>

      <div className="text-center max-w-xl p-10 bg-white shadow-sm border border-(--color-grey) rounded-lg">
        {/* Число 404 в твоем основном цвете */}
        <span className="text-8xl font-black text-(--color-green) block mb-4">
          404
        </span>

        <h2 className="text-2xl md:text-3xl font-bold text-(--color-bg-footer) mb-6 uppercase tracking-wider">
          Страница не найдена
        </h2>

        <p className="text-gray-500 mb-10 leading-relaxed">
          К сожалению, запрашиваемый товар или раздел временно недоступен.
          Возможно, мы обновили коллекцию халатов или полотенец.
        </p>

        {/* Кнопки с использованием твоих переменных */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-4 text-white font-semibold rounded transition-all duration-300 shadow-md bg-(--color-green) hover:bg-(--color-green-hover)"
          >
            НА ГЛАВНУЮ
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 font-semibold rounded border border-(--color-grey) text-(--color-bg-footer) hover:bg-(--color-white-cloud) transition-all"
          >
            СВЯЗАТЬСЯ С НАМИ
          </Link>
        </div>

        {/* Декор "под текстиль" */}
        <div className="mt-12 flex justify-center items-center gap-3">
          <div className="h-px w-10 bg-(--color-grey)"></div>
          <span className="text-xs uppercase text-(--color-grey) tracking-[0.2em]">Aqvela Home Textile</span>
          <div className="h-px w-10 bg-(--color-grey)"></div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;