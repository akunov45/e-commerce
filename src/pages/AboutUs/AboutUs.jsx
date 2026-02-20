import React from 'react';
import { CheckCircle, Truck, Users, Factory, MessageSquare } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { icon: <Factory size={32} />, label: "Собственное производство", value: "г. Бишкек" },
    { icon: <Users size={32} />, label: "Довольных клиентов", value: "5000+" },
    { icon: <Truck size={32} />, label: "Оптовые поставки", value: "СНГ и мир" },
  ];

  const advantages = [
    { title: "Высокое качество", desc: "Используем только проверенную микрофибру и хлопок, которые не линяют и служат годами." },
    { title: "Оптовые цены", desc: "Прямые поставки без посредников позволяют нам предлагать лучшие цены на рынке." },
    { title: "Индивидуальный пошив", desc: "Возможность брендирования и изготовления партий под ваш заказ." },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FA] text-[#2C4B72]">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#2C4B72]">
        <img
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
          alt="Home Textile"
          className="absolute inset-0 w-full h-full object-cover opacity-40 shadow-inner"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-widest">
            Aqvela
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Создаем уют и комфорт в каждом доме с 2015 года. Лидеры рынка домашнего текстиля в Кыргызстане.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-[#D1D9E0] flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300">
              <div className="text-[#4A707A] mb-4">{stat.icon}</div>
              <div className="text-2xl font-black mb-1">{stat.value}</div>
              <div className="text-gray-500 uppercase text-xs tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-12 h-1 bg-[#4A707A]"></span>
            Наша история
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Munitext Home начиналась как небольшое семейное ателье. Сегодня мы — это современное производство, специализирующееся на производстве полотенец, халатов и аксессуаров из микрофибры высшего качества.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Мы понимаем потребности оптового бизнеса, поэтому гарантируем стабильность поставок, четкое соблюдение SKU и постоянное обновление ассортимента.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://i.pinimg.com/1200x/25/51/77/255177630604789ec25d047172b44f8c.jpg" className="rounded-2xl shadow-md h-64 w-full object-cover mt-8" alt="Textile 1" />
          <img src="https://i.pinimg.com/1200x/06/49/1b/06491b283025290fef22c755bed751fb.jpg" className="rounded-2xl shadow-md h-64 w-full object-cover" alt="Textile 2" />
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="bg-[#F2F5F7] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold uppercase">Почему выбирают нас</h2>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl border border-[#D1D9E0] transition-all hover:border-[#4A707A] hover:shadow-lg group">
              <div className="w-12 h-12 bg-[#F7F9FA] rounded-full flex items-center justify-center mb-6 text-[#4A707A] group-hover:bg-[#4A707A] group-hover:text-white transition-colors duration-300">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{adv.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section (B2B focused) */}
      <section className="max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="bg-[#4A707A] p-10 md:p-16 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">Готовы обсудить оптовый заказ?</h2>
            <p className="mb-10 text-white/80 max-w-xl mx-auto">Получите актуальный прайс-лист и образцы материалов уже сегодня.</p>
            <button className="bg-white text-[#4A707A] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#F7F9FA] transition-all flex items-center gap-2 mx-auto active:scale-95 duration-300">
              <MessageSquare size={20} /> Связаться в WhatsApp
            </button>
          </div>
          {/* Декоративный элемент фона */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;