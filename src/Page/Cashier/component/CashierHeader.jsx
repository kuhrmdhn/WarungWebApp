<<<<<<< HEAD
import { Badge, IconButton } from '@mui/material'
import FilterProduct from '../../../atom/FilterProduct'
import Logo from '../../../atom/Logo'
import SearchBar from '../../../atom/SearchBar'
import { useGetApiStore } from '../../../../Zustand/Api/ApiStore'
import { useCartOrder } from '../../../../Zustand/CartOrder/CartOrderStore'
import { ShoppingCart } from '@mui/icons-material'

function CashierHeader() {
  const setCartOrderShow = useCartOrder(state => state.setCartOrderShow)
  const orderData = useGetApiStore(state => state.orderData)

  return (
    <header className='h-36 md:h-1/6 lg:h-36 w-full flex flex-col justify-between items-center text-white'>
      <section className="h-1/2 lg:h-20 w-full flex bg-cashier-primary justify-around items-center">
        <Logo.LogoWhite/>
        <div className="h-10 w-3/5 sm:w-1/2 lg:w-1/4 flex gap-2 text-white">
          <SearchBar />
          <IconButton color="inherit" onClick={setCartOrderShow}>
            <Badge badgeContent={orderData.length} color="error" className="relative -top-1" aria-label="order cart" aria-labelledby="order cart" title="order cart">
              <ShoppingCart className="hover:animate-[shake_1s_ease-in-out]" fontSize="small" />
            </Badge>
          </IconButton>
        </div>
      </section>
      <section className='w-11/12 sm:w-full lg:w-5/6 h-1/2 lg:h-16'>
        <FilterProduct />
      </section>
    </header>
  )
}

export default CashierHeader
=======
import Header from '../../../atom/Header'

function CashierHeader() {
  return (
    <Header>
        <Header.Navigation/>
        <section className='w-full h-full flex flex-col md:flex-row items-center justify-center'>
        <Header.CashierLogo/>
        <Header.CashierSearchBar/>
        </section>
    </Header>
  )
}

export default CashierHeader
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
