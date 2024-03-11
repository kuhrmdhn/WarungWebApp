import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useNavigateProduct } from "../../../../Zustand/Navigate/NavigateStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import PageError from "../../../atom/PageError"
import CashierProductCard from "../element/CashierProductCard"

function CashierProductList() {
  const productData = useGetApiStore(state => state.productData)
  const navigate = useNavigateProduct(state => state.navigate)
  const searchKeyword = useSearchKeyword(state => state.searchKeyword)
  let filteredProductData;
  if (searchKeyword !== "") {
    filteredProductData = productData.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
  } else {
    if (navigate === "Semua") {
      filteredProductData = productData
    } else {
      filteredProductData = productData.filter((data) => data.category === navigate)
    }
  }
  
  return (
    <>
      {
        filteredProductData.length === 0 ?
          <section className="h-full w-full">
            <PageError.EmptyProduct details={"Produk Tidak Ditemukan"} />
          </section>
          :
          <section className="w-full h-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-y-3">
            {
              filteredProductData.map((data) => (
                <CashierProductCard
                  key={data.id}
                  id={data.id}
                  code={data.code}
                  name={data.name}
                  price={data.price}
                  image={`${data.image}`}
                  isReady={data.isReady}
                  stock={data.stock}
                  sold={data.sold}
                  category={data.category}
                />
              ))
            }
          </section>
      }
    </>
  )
}

export default CashierProductList
