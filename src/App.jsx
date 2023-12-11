import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import CashierApp from './Page/Cashier/layout/CashierApp'
import OwnerApp from './Page/Owner/Layout/OwnerApp'

const route = createBrowserRouter([
  {
    path: "/",
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
      <RouterProvider router={route}/>
    </>
  )
}

export default App
