

import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div className="grow max-w-2xl mx-10">
      <div className="relative group">
        <input
          type="text"
          name="q"
          placeholder="Искать товары"
          className="w-full py-3 pl-6 pr-14 bg-(--color-white-cloud) border border-(--color-grey) rounded-full
             outline-none transition-all duration-200
             placeholder:text-(--color-green) text-gray-800
             group-hover:bg-(--color-white-cloud)
             focus:bg-white focus:ring-2 focus:ring-(--color-white-cloud) focus:border-transparent focus:shadow-lg"
        />
        <button
          type="submit"
          className="absolute cursor-pointer right-1 top-1/2 -translate-y-1/2
             bg-white hover:bg-(--color-green) hover:text-white  p-2.5  rounded-full shadow-sm
             text-gray-700 hover:shadow-md
             active:scale-95 transition-all duration-200"
        >
          <Search />
        </button>
      </div>
    </div>
  )
}

export default SearchInput