import { Suspense, lazy } from "react"
import CashierHeader from "../component/CashierHeader"
import ProductCardSkeleton from "../../../molecul/ProductCardSkeleton"
const CashierProductList = lazy(() => import("../component/CashierProductList"))

function CashierTemplate() {
    return (
        <div className='h-screen w-full flex flex-col justify-between items-center relative'>
            <CashierHeader />
            <div className="w-full lg:w-5/6 h-5/6 lg:h-3/4">
                <Suspense fallback={<ProductCardSkeleton />}>
                    <CashierProductList />
                </Suspense>
            </div>
        </div>
    )
}

export default CashierTemplate
