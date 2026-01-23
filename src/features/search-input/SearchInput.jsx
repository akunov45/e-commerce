

import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <div class="grow max-w-2xl mx-10">
      <div class="relative group">
        <input
          type="text"
          name="q"
          placeholder="Искать товары"
          class="w-full py-3 pl-6 pr-14 bg-gray-100 border border-transparent rounded-full
             outline-none transition-all duration-200
             placeholder:text-gray-500 text-gray-800
             group-hover:bg-gray-200/70
             focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent focus:shadow-lg"
        />

        <button
          type="submit"
          class="absolute right-1.5 top-1/2 -translate-y-1/2
             bg-white p-2.5 rounded-full shadow-sm
             text-gray-700 hover:text-orange-600 hover:shadow-md
             active:scale-95 transition-all duration-200"
        >
          <Search />
        </button>
      </div>
    </div>
  )
}

export default SearchInput