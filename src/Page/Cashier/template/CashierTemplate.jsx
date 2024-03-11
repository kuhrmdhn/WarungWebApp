import { Suspense, lazy } from "react"
import CashierHeader from "../component/CashierHeader"
import ProductCardSkeleton from "../../../skeleton/ProductCardSkeleton"
const CashierProductList = lazy(() => import("../component/CashierProductList"))

function CashierTemplate() {
    return (
        <div className='h-screen w-full relative flex flex-col items-center bg-gray-50'>
            <CashierHeader />
            <div className="w-5/6 webkit-scroll-bar mt-7">
                <Suspense fallback={<ProductCardSkeleton />}>
                    <CashierProductList />
                </Suspense>
            </div>
        </div>
    )
}

export default CashierTemplate
