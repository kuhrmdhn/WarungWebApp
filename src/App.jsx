import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import CashierApp from './page/Cashier/pages/CashierApp'
import OwnerApp from './page/Owner/pages/OwnerApp'

const route = createBrowserRouter([
  {
    path: "/cashier",
=======
import CashierApp from './Page/Cashier/layout/CashierApp'
import OwnerApp from './Page/Owner/Layout/OwnerApp'

const route = createBrowserRouter([
  {
    path: "/",
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    element: <CashierApp />
  },
  {
    path: "/owner",
    element: <OwnerApp />
  }
])

function App() {
  return (
    <>
<<<<<<< HEAD
      <RouterProvider router={route} />
=======
      <RouterProvider router={route}/>
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    </>
  )
}

export default App
