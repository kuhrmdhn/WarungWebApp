import { Suspense, lazy } from "react"
import ProductCardSkeleton from "../../../molecul/ProductCardSkeleton"
import OwnerHeader from "../component/OwnerHeader"
import ProductReport from "../component/ProductReport"
const OwnerProductList = lazy(() => import("../component/OwnerProductList"))

function OwnerAppTemplate() {
  return (
    <div className='h-screen w-full flex'>
      <section className="h-full w-2/3">
        <OwnerHeader />
        <Suspense fallback={<ProductCardSkeleton />}>
          <OwnerProductList />
        </Suspense>
      </section>
      <section className="h-full w-1/3">
        <ProductReport />
      </section>
    </div>
  )
}

export default OwnerAppTemplate
