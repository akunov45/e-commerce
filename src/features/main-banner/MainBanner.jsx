import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const MainBanner = () => {
  // Инициализация с автоплеем
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <section className="relative group overflow-hidden bg-gray-100 rounded-3xl" ref={emblaRef}>
      <div className="flex">
        {/* Слайд 1 */}
        <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]">
          <img src="/b1.png" className="absolute inset-0 w-full h-full object-cover" alt="Sale" />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Новинки </h2>
            <button className="bg-orange-500 w-fit px-6 py-3 rounded-full hover:bg-orange-600 transition">Смотреть</button>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]">
          <img src="/b2.png" className="absolute inset-0 w-full h-full object-cover" alt="Sale" />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Новинки </h2>
            <button className="bg-orange-500 w-fit px-6 py-3 rounded-full hover:bg-orange-600 transition">Смотреть</button>
          </div>
        </div>
        <div className="flex-[0_0_100%] min-w-0 relative h-[400px] md:h-[500px]">
          <img src="https://cdn.oreateai.com/aiimage/strategy/6ac603000f6c424d9dd2cb50b0219af7.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Sale" />
          <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Новинки </h2>
            <button className="bg-orange-500 w-fit px-6 py-3 rounded-full hover:bg-orange-600 transition">Смотреть</button>
          </div>
        </div>

      </div>

      {/* Кнопки управления (видны при наведении) */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        onClick={scrollPrev}
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        onClick={scrollNext}
      >
        →
      </button>
    </section>
  )
}