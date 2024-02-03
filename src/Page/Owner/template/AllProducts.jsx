import { Suspense, lazy } from "react"
import SearchBar from "../../../atom/SearchBar"
import ResetSoldDataButton from "../element/ResetSoldDataButton"
import ProductCardSkeleton from "../../../molecul/ProductCardSkeleton"
import SectionTitle from "../../../atom/SectionTitle"
import OptionButton from "../element/OptionButton"
const OwnerProductList = lazy(() => import("../component/OwnerProductList"))

function AllProducts() {
  return (
    <section id="allProducts" className="w-full min-h-screen h-fit mt-16 pt-6 pl-1 xs:pl-2 lg:pl-10 flex flex-col items-center">
      <SectionTitle>
        <SectionTitle.Title title={"Semua Produk"} sizes={"large"} />
      </SectionTitle>
      <div className="h-36 w-full flex-col">
        <SectionTitle>
          <SectionTitle.SubTitle subTitle={"Pengaturan Produk"} />
        </SectionTitle>
        <section className="h-20 w-full flex flex-col sm:flex-row justify-around sm:items-center">
          <div className="h-8 w-full sm:w-1/2 lg:w-3/5">
            <ResetSoldDataButton />
          </div>
          <div className="h-10 w-full sm:w-1/2 lg:w-1/3 flex justify-center items-center mt-2">
            <SearchBar />
            <OptionButton/>
          </div>
        </section>
      </div>
      <div className="h-full w-full lg:w-11/12">
        <Suspense fallback={<ProductCardSkeleton />}>
          <OwnerProductList />
        </Suspense>
      </div>
    </section>
  )
}

export default AllProducts
