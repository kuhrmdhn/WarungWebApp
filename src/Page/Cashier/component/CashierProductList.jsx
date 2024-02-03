import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
<<<<<<< HEAD
import { useNavigateProduct } from "../../../../Zustand/Navigate/NavigateStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import PageError from "../../../atom/PageError"
=======
import { useNavigate } from "../../../../Zustand/Navigate/NavigateStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
import CashierProductCard from "../element/CashierProductCard"

function CashierProductList() {
  const productData = useGetApiStore(state => state.productData)
<<<<<<< HEAD
  const navigate = useNavigateProduct(state => state.navigate)
=======
  const navigate = useNavigate(state => state.navigate)
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  const searchKeyword = useSearchKeyword(state => state.searchKeyword)
  let filteredProductData;
  if (searchKeyword !== "") {
    filteredProductData = productData.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
  } else {
<<<<<<< HEAD
    if (navigate === "") {
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
            <PageError.EmptyProduct details={"Produk Tidak Ditemukan"}/>
          </section>
          :
          <section className="w-full h-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 webkit-scroll-bar gap-5 lg:gap-2 sm:gap-4 md:px-4 py-5 lg:py-0 bg-white">
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
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  )
}

export default CashierProductList
