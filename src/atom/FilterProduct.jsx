import { useGetApiStore } from "../../Zustand/Api/ApiStore"
import { useNavigateProduct } from "../../Zustand/Navigate/NavigateStore"

function FilterProduct() {
    const categoryData = useGetApiStore(state => state.categoryData)
    const [navigate, setNavigate] = useNavigateProduct(state => [state.navigate, state.setNavigate])

    function setCategoryByNavigate(target) {
        setNavigate(target)
    }
    return (
        <section className="h-full w-full sm:pl-4 flex gap-3 text-cashier-primary">
            <div className="w-full h-full lg:h-20 pl-2 flex items-center gap-4 webkit-scroll-bar">
                <button onClick={() => setCategoryByNavigate("")} className={`${"" === navigate ? "bg-cashier-primary text-white" : "bg-gray-200"} border rounded-2xl w-fit h-fit px-3 sm:px-5 py-2 text-xs sm:text-sm hover:scale-105 duration-200`} type="button">
                    Semua
                </button>
                {
                    categoryData.map((data) => (
                        <button onClick={() => setCategoryByNavigate(data.name)} key={data.id} className={`${data.name === navigate ? "bg-cashier-primary text-white" : "bg-gray-200"} border rounded-2xl w-fit h-fit px-3 sm:px-5 py-2 text-xs sm:text-sm hover:scale-105 duration-200`} >
                            {data.name}
                        </button>
                    ))
                }
            </div>
        </section>
    )
}

export default FilterProduct
