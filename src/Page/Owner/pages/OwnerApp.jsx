import Dashboard from "../template/Dashboard"
import EditProductForm from "../template/EditProductForm"
import AllProducts from "../template/AllProducts"
import AddProductForm from "../template/AddProductForm"
import Sidebar from "../template/Sidebar"
import AccountProfile from "../template/AccountProfile"

function OwnerApp() {
    return (
        <main className="h-screen w-full bg-white font-montserrat">
            <div className='h-full w-full flex flex-col-reverse sm:flex-row'>
                <section className="w-full sm:w-1/4 lg:w-1/6 h-14 sm:h-full">
                    <Sidebar />
                </section>
                <section className="w-full sm:w-11/12 overflow-y-auto">
                    <Dashboard />
                    <AllProducts />
                    <AddProductForm />
                    <AccountProfile />
                    <EditProductForm />
                </section>
            </div>
        </main>
    )
}

export default OwnerApp
