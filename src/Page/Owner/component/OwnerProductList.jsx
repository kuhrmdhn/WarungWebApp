import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useNavigateProduct } from "../../../../Zustand/Navigate/NavigateStore";
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore";
import OwnerProductCard from "../element/OwnerProductCard"

function OwnerProductList() {
    const productData = useGetApiStore(state => state.productData)
    const searchKeyword = useSearchKeyword(state => state.searchKeyword)
    const navigate = useNavigateProduct(state => state.navigate)
    let productList;
    if (searchKeyword !== "") {
        productList = productData.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    } else {
        if (navigate === "Semua") {
            productList = productData
        } else {
            productList = productData.filter((data) => data.category === navigate)
        }
    }
    
    return (
        <section className="w-full min-h-screen h-full grid justify-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-3 sm:gap-4 md:px-4">
            {
                productList.map((data) => (
                    <OwnerProductCard
                        key={data.id}
                        id={data.id}
                        code={data.code}
                        name={data.name}
                        price={data.price}
                        image={data.image}
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

export default OwnerProductList
