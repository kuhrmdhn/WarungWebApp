import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CashierApp from './page/Cashier/pages/CashierApp'
import OwnerApp from './page/Owner/pages/OwnerApp'
import Chef from './Page/Chef/pages/Chef'

const route = createBrowserRouter([
  {
    path: "/chef",
    element: <Chef />
  },
  {
    path: "/cashier",
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
      <RouterProvider router={route} />
    </>
  )
}

export default App
