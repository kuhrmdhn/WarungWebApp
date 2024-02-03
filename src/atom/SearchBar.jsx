<<<<<<< HEAD
import { Search } from "@mui/icons-material"
import { useSearchKeyword } from "../../Zustand/SearchBar/SearchBarStore"

function SearchBar() {
    const setSearchKeyword = useSearchKeyword(state => state.setSearchKeyword)

    function handleOnChange(e) {
        setSearchKeyword(e.target.value)
    }
    return (
        <div className='w-full h-full relative flex'>
            <label className="absolute z-10 cursor-pointer right-2 top-1 text-cashier-primary" htmlFor="searchInput" title="Search Product">
                <Search />
            </label>
            <input id="searchInput" type="text" onChange={handleOnChange} placeholder="Cari" className='h-full w-full border border-gray-500 rounded-lg p-3 text-xs sm:text-sm text-cashier-primary' />
=======
function SearchBar({value, onChange}) {
    return (
        <div className='w-2/3 h-8 xs:h-9 sm:h-11'>
            <label htmlFor="searchBar"></label>
            <input id="searchBar" type="text" value={value} onChange={onChange} placeholder="Cari Produk" className='h-full w-full border-2 border-slate-700 rounded-lg p-3 text-xs sm:text-sm' />
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
        </div>
    )
}

export default SearchBar
