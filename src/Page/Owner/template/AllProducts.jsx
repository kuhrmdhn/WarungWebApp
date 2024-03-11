import { Suspense, lazy } from "react"
import SearchBar from "../../../atom/SearchBar"
import ResetSoldDataButton from "../element/ResetSoldDataButton"
import ProductCardSkeleton from "../../../skeleton/ProductCardSkeleton"
import SectionTitle from "../../../atom/SectionTitle"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import FilterProduct from "../../../atom/FilterProduct"
const OwnerProductList = lazy(() => import("../component/OwnerProductList"))

function AllProducts() {
  const setSearchKeyword = useSearchKeyword(state => state.setSearchKeyword)

  return (
    <section id="allProducts" className="w-full min-h-screen h-fit mt-16 pt-6 pl-1 xs:pl-2 lg:pl-10 flex flex-col items-center">
      <SectionTitle>
        <SectionTitle.Title title={"Semua Produk"} sizes={"large"} />
      </SectionTitle>
      <div className="h-36 w-full flex-col">
        <SectionTitle>
          <SectionTitle.SubTitle subTitle={"Pengaturan Produk"} />
        </SectionTitle>
        <section className="h-20 w-full flex flex-col sm:flex-row sm:items-center">
          <div className="h-8 w-full sm:w-1/2 lg:w-3/5">
            <ResetSoldDataButton />
          </div>
          <div className="h-10 w-5/6 sm:w-1/2 lg:w-1/3 flex justify-center self-end mt-2 pr-4 sm:pr-0">
            <SearchBar setKeyword={setSearchKeyword} />
          </div>
        </section>
      </div>
      <div className="h-max w-full lg:w-11/12 flex flex-col gap-5">
        <FilterProduct />
        <Suspense fallback={<ProductCardSkeleton />}>
          <OwnerProductList />
        </Suspense>
      </div>
    </section>
  )
}

export default AllProducts
