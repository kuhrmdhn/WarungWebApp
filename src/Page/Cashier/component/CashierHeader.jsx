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
    <header className='h-36 md:h-1/6 lg:h-32 w-full flex flex-col justify-evenly items-center bg-white text-white'>
      <section className="h-1/2 lg:h-20 w-full border-b-2 border-gray-300 flex justify-around items-center">
        <Logo.LogoBlack/>
        <div className="h-10 w-3/5 sm:w-1/2 lg:w-2/5 flex gap-2 text-black">
          <SearchBar setKeyword={setSearchKeyword} />
          <IconButton color="inherit" onClick={setCartOrderShow}>
            <Badge badgeContent={orderData.length} color="primary" className="relative top-0" aria-label="order cart" aria-labelledby="order cart" title="order cart">
              <ShoppingCart className="hover:animate-[shake_1s_ease-in-out]" fontSize="small" />
            </Badge>
          </IconButton>
        </div>
      </section>
      <section className='h-12 w-5/6'>
        <FilterProduct/>
      </section>
    </header>
  )
}

export default CashierHeader