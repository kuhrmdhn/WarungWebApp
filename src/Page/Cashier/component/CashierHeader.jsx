import { Badge, IconButton } from '@mui/material'
import FilterProduct from '../../../atom/FilterProduct'
import Logo from '../../../atom/Logo'
import SearchBar from '../../../atom/SearchBar'
import { useGetApiStore } from '../../../../Zustand/Api/ApiStore'
import { useCartOrder } from '../../../../Zustand/CartOrder/CartOrderStore'
import { ShoppingCart } from '@mui/icons-material'
import { useSearchKeyword } from '../../../../Zustand/SearchBar/SearchBarStore'

function CashierHeader() {
  const setCartOrderShow = useCartOrder(state => state.setCartOrderShow)
  const orderData = useGetApiStore(state => state.orderData)
  const setSearchKeyword = useSearchKeyword(state => state.setSearchKeyword)

  return (
    <header className='h-36 md:h-1/6 lg:h-36 w-full flex flex-col justify-between items-center text-white'>
      <section className="h-1/2 lg:h-20 w-full flex bg-cashier-primary justify-around items-center">
        <Logo.LogoWhite/>
        <div className="h-10 w-3/5 sm:w-1/2 lg:w-1/4 flex gap-2 text-white">
          <SearchBar setKeyword={setSearchKeyword} />
          <IconButton color="inherit" onClick={setCartOrderShow}>
            <Badge badgeContent={orderData.length} color="error" className="relative -top-1" aria-label="order cart" aria-labelledby="order cart" title="order cart">
              <ShoppingCart className="hover:animate-[shake_1s_ease-in-out]" fontSize="small" />
            </Badge>
          </IconButton>
        </div>
      </section>
      <section className='w-11/12 sm:w-full lg:w-5/6 h-1/2 lg:h-14 flex items-center sm:items-end'>
        <FilterProduct />
      </section>
    </header>
  )
}

export default CashierHeader