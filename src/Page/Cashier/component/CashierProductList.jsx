import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useNavigate } from "../../../../Zustand/Navigate/NavigateStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import CashierProductCard from "../element/CashierProductCard"

function CashierProductList() {
  const productData = useGetApiStore(state => state.productData)
  const navigate = useNavigate(state => state.navigate)
  const searchKeyword = useSearchKeyword(state => state.searchKeyword)
  let filteredProductData;
  if (searchKeyword !== "") {
    filteredProductData = productData.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
  } else {
    filteredProductData = productData.filter((data) => data.category.name === navigate)
  }

  return (
    <section className="w-full h-5/6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 webkit-scroll-bar py-5 px-1 md:px-4 lg:px-4">
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
  )
}

export default CashierProductList
