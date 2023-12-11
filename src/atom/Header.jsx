import { Badge } from "@mui/material"
import { useGetApiStore } from "../../Zustand/Api/ApiStore"
import { useSearchKeyword } from "../../Zustand/SearchBar/SearchBarStore"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import { ShoppingCart } from "@mui/icons-material"
import { useCartOrder } from "../../Zustand/CartOrder/CartOrderStore"
import Navigate from "./Navigate"

function Header({ children }) {
  return (
    <header className="w-full h-24 md:h-32 xl:h-1/6 border-2 border-black flex items-center justify-between">
      {children}
    </header>
  )
}

function Navigation() {
  return (
    <section className="h-full w-20 flex justify-center items-center">
      <Navigate />
    </section>
  )
}

function CashierLogo() {
  return (
    <section className="h-8 xs:h-12 w-fit flex justify-center items-center">
      <Logo />
    </section>
  )
}

function CashierSearchBar() {
  const setCartOrderShow = useCartOrder(state => state.setCartOrderShow)
  const orderData = useGetApiStore(state => state.orderData)
  const [searchKeyword, setSearchKeyword] = useSearchKeyword((state) => [state.searchKeyword, state.setSearchKeyword])

  function handleOnChange(e) {
    setSearchKeyword(e.target.value)
  }

  return (
    <section className="w-full h-14 flex items-center justify-center gap-3">
      <SearchBar value={searchKeyword} onChange={(e) => handleOnChange(e)} />
      {
        window.innerWidth < 1024 &&
        <button onClick={() => setCartOrderShow()} aria-label="order cart button" type="button">
          <Badge badgeContent={orderData.length} color="primary" className="relative -top-1">
            <ShoppingCart className="hover:animate-[shake_1s_ease-in-out]" fontSize="small" />
          </Badge>
        </button>
      }
    </section>
  )
}

function OwnerSearchBar() {
  const [searchKeyword, setSearchKeyword] = useSearchKeyword(state => [state.searchKeyword, state.setSearchKeyword])

  function handleOnChange(e) {
    setSearchKeyword(e.target.value)
  }
  return (
    <section className="w-5/6 h-full flex justify-evenly items-center">
      <Logo />
      <SearchBar value={searchKeyword} onChange={(e) => handleOnChange(e)} />
    </section>
  )
}

Header.Navigation = Navigation
Header.CashierLogo = CashierLogo
Header.CashierSearchBar = CashierSearchBar
Header.OwnerSearchBar = OwnerSearchBar
export default Header
