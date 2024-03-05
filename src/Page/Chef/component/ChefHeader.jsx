import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import Logo from "../../../atom/Logo"
import SearchBar from "../../../atom/SearchBar"

function ChefHeader() {
    const setSearchOrderGroupItem = useSearchKeyword(state => state.setSearchOrderGroupItem)

    return (
        <header className="w-full h-16 sm:h-24 lg:h-1/6 bg-white flex justify-around items-center">
            <Logo.LogoBlack />
            <span className="w-1/2 sm:w-1/3 lg:w-1/5 h-10">
            <SearchBar setKeyword={setSearchOrderGroupItem} placeholder={"Cari Nama Pembeli"} />
            </span>
        </header>
    )
}

export default ChefHeader
