import { Search } from "@mui/icons-material"

function SearchBar({ setKeyword, placeholder }) {
    function handleOnChange(e) {
        setKeyword(e.target.value)
    }
    return (
        <div className='w-full h-full relative flex'>
            <label className="absolute z-10 cursor-pointer right-2 top-1 text-cashier-primary" htmlFor="searchInput" title="Search Product">
                <Search />
            </label>
            <input id="searchInput" type="text" onChange={handleOnChange} placeholder={placeholder || "Cari"} className='h-full w-full border border-gray-500 rounded-lg p-3 text-xs sm:text-sm text-cashier-primary' />
        </div>
    )
}

export default SearchBar