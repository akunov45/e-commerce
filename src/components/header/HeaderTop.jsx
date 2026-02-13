import { Navigation } from "lucide-react"
import { Link } from "react-router-dom"

const HeaderTop = () => {
  const menu = ["Оплата и доставка", "Возврат", "Контакты"]

  return (
    <div className="container mx-auto px-4 flex items-center justify-between py-3">
      <div className="
  flex gap-1 items-center
  px-2 py-1
  text-(--color-green)
  rounded-full
">
        <Navigation size={14} />
        <span className="text-sm">Бишкек</span>
      </div>


      <div>
        <ul className="flex md:gap-5 gap-1 text-xs">
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to=""
                className="
          md:px-3 px-1 py-1 rounded
          hover:text-white
          hover:bg-(--color-green)
          transition
        "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default HeaderTop