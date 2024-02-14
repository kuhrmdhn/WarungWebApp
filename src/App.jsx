import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CashierApp from './page/Cashier/pages/CashierApp'
import OwnerApp from './page/Owner/pages/OwnerApp'
import Chef from './Page/Chef/pages/Chef'
import HomePage from './Page/Home/pages/HomePage'

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/cashier",
    element: <CashierApp />
  },
  {
    path: "/chef",
    element: <Chef />
  },
  {
    path: "/owner",
    element: <OwnerApp />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
