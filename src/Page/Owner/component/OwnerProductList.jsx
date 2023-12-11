import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useNavigate } from "../../../../Zustand/Navigate/NavigateStore";
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore";
import OwnerProductCard from "../element/OwnerProductCard"

function OwnerProductList() {
    const productData = useGetApiStore(state => state.productData)
    const searchKeyword = useSearchKeyword(state => state.searchKeyword)
    const navigate = useNavigate(state => state.navigate)
    let data;
    if (searchKeyword !== "") {
        data = productData.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    } else {
        data = productData.filter((data) => data.category.name === navigate)
    }

    return (
        <section className="w-full h-5/6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 webkit-scroll-bar py-5 px-1 md:px-4 lg:px-4">
            {
                data.map((data) => (
                    <OwnerProductCard
                        key={data.id}
                        id={data.id}
                        code={data.code}
                        name={data.name}
                        price={data.price}
                        image={data.image}
                        isReady={data.isReady}
                        category={data.category}
                        stock={data.stock}
                    />
                ))
            }
        </section>
    )
}

export default OwnerProductList
