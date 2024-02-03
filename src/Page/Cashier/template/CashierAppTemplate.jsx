import { Suspense, lazy } from "react"
import ProductCardSkeleton from "../../../molecul/ProductCardSkeleton"
import { useCartOrder } from "../../../../Zustand/CartOrder/CartOrderStore"
import OrderCartTemplate from "./OrderCartTemplate"
import CashierHeader from "../component/CashierHeader"
const CashierProductList = lazy(() => import("../component/CashierProductList"))

function CashierAppTemplate() {
    const cartOrderShow = useCartOrder(state => state.cartOrderShow)
    return (
        <div className='h-screen w-full flex'>
            <section className='w-full lg:w-2/3 h-full'>
                <CashierHeader/>
                <Suspense fallback={<ProductCardSkeleton />}>
                    <CashierProductList />
                </Suspense>
            </section>
            {
                window.innerWidth < 1024 ?
                    <section className={`w-full h-full fixed ${cartOrderShow ? "right-0" : "-right-full"} duration-500 top-0 z-20 bg-white`}>
                        <OrderCartTemplate />
                    </section>
                    :
                    <section className={`w-1/3 h-full fixed right-0 top-0 bg-white`}>
                        <OrderCartTemplate />
                    </section>
            }
        </div>

    )
}

export default CashierAppTemplate
