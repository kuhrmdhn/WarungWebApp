import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
<<<<<<< HEAD
import { useNavigateProduct } from "../../../../Zustand/Navigate/NavigateStore";
=======
import { useNavigate } from "../../../../Zustand/Navigate/NavigateStore";
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore";
import OwnerProductCard from "../element/OwnerProductCard"

function OwnerProductList() {
    const productData = useGetApiStore(state => state.productData)
<<<<<<< HEAD
    const productDataSlice = productData.slice()
    const searchKeyword = useSearchKeyword(state => state.searchKeyword)
    const navigate = useNavigateProduct(state => state.navigate)
    let productLists;
    if (searchKeyword !== "") {
        productLists = productDataSlice.filter((data) => data.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    } else {
        if (navigate === "") {
            productLists = productDataSlice
        } else {
            productLists = productDataSlice.filter((data) => data.category === navigate)
        }
    }
    return (
        <section className="w-full min-h-screen h-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-4 md:px-4">
            {
                productLists.map((data) => (
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
                    <OwnerProductCard
                        key={data.id}
                        id={data.id}
                        code={data.code}
                        name={data.name}
                        price={data.price}
                        image={data.image}
                        isReady={data.isReady}
<<<<<<< HEAD
                        stock={data.stock}
                        sold={data.sold}
                        category={data.category}
=======
                        category={data.category}
                        stock={data.stock}
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
                    />
                ))
            }
        </section>
    )
}

export default OwnerProductList
