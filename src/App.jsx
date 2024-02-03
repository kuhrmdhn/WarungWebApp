import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CashierApp from './page/Cashier/pages/CashierApp'
import OwnerApp from './page/Owner/pages/OwnerApp'

const route = createBrowserRouter([
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
