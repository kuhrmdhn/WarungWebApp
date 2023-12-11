function SearchBar({value, onChange}) {
    return (
        <div className='w-2/3 h-8 xs:h-9 sm:h-11'>
            <label htmlFor="searchBar"></label>
            <input id="searchBar" type="text" value={value} onChange={onChange} placeholder="Cari Produk" className='h-full w-full border-2 border-slate-700 rounded-lg p-3 text-xs sm:text-sm' />
        </div>
    )
}

export default SearchBar
