import React from 'react';
import { Tag } from 'lucide-react'; // Используем иконку Tag для акции

const News = () => {
  // Данные для новостей - легко добавлять новые
  const newsData = [
    {
      id: 1,
      image: "https://i.pinimg.com/1200x/09/cf/24/09cf24629a1620f2a3bf96be8a15f11d.jpg",
      alt: "Полотенца",
      badge: { text: "АКЦИЯ", color: "text-amber-700 bg-amber-100" },
      title: "-30% на набор махровых полотенец",
      text: "Обновите ванную к весне: скидки на все наборы полотенец из хлопка.",
      date: "15 февраля 2026",
      link: "#"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/1200x/b4/a6/4a/b4a64ac915c363d7e0bea330629f6644.jpg",
      alt: "Халаты",
      badge: { text: "НОВИНКА", color: "text-blue-700 bg-blue-100" },
      title: "Новая коллекция: халаты из бамбука",
      text: "Представляем эксклюзивные халаты из натурального бамбукового волокна – идеальный комфорт.",
      date: "01 марта 2026",
      link: "#"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/69/ff/23/69ff23d5020133a844f3ea5326855124.jpg",
      alt: "Постельное белье",
      badge: { text: "СОВЕТ", color: "text-gray-700 bg-gray-100" },
      title: "Как выбрать идеальное постельное белье",
      text: "Полезные советы от экспертов Munitext Home для создания идеального спального места.",
      date: "28 февраля 2026",
      link: "#"
    }
  ];

  return (
    <section className="min-h-screen bg-[var(--color-body)] py-16 md:py-24 text-[var(--color-bg-footer)]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Заголовок секции */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 uppercase tracking-wider">
          Новости и акции
        </h2>

        {/* Контейнер для карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((newsItem) => (
            <div
              key={newsItem.id}
              className="
                bg-(--color-white-cloud)
                rounded-2xl
                shadow-lg
                border border-(--color-grey)
                overflow-hidden
                flex flex-col
                transition-transform
                hover:scale-[1.01]
                hover:shadow-2xl
                duration-300
                group
              "
            >
              {/* Контейнер для изображения с бейджем */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${newsItem.badge.color}`}
                >
                  <Tag size={16} /> {newsItem.badge.text}
                </div>
              </div>

              {/* Тело карточки */}
              <div className="p-6 flex flex-col grow bg-white">
                <h3 className="text-xl font-bold mb-3 leading-snug">{newsItem.title}</h3>
                <p className="text-gray-600 text-sm mb-4 grow">{newsItem.text}</p>
                <p className="text-xs text-gray-400 mb-6">{newsItem.date}</p>

                {/* Кнопка "Подробнее" */}
                <div className="mt-auto"> {/* push the button to bottom */}
                  <a
                    href={newsItem.link}
                    className="
                      inline-flex items-center justify-center
                      px-6 py-3
                      border border-(--color-green)
                      text-(--color-green)
                      rounded-full
                      font-semibold
                      hover:bg-(--color-green)
                      hover:text-white
                      transition-all
                      duration-300
                      active:scale-95
                    "
                  >
                    Подробнее →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;