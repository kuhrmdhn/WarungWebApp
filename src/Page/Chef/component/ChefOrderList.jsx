import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import OrderGroupCard from "../element/OrderGroupCard";

function ChefOrderList() {
    const searchOrderGroupItem = useSearchKeyword(state => state.searchOrderGroupItem)
    const orderGroupData = useGetApiStore(state => state.orderGroupData)
    const convertSearchInput = searchOrderGroupItem.toLowerCase().replaceAll(/ /g, "")
    let filterOrderGroup = orderGroupData
    if (searchOrderGroupItem !== "") {
        filterOrderGroup = orderGroupData.filter(dataGroup => dataGroup.buyer.toLowerCase().replaceAll(/ /g, "").includes(convertSearchInput))
    }

    return (
        <section className="w-full h-5/6 pt-5 sm:pt-7 flex justify-center items-start overflow-y-small">
            <div className="min-h-fit w-11/12 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {
                    filterOrderGroup.map((order) => (
                        <OrderGroupCard
                            key={order.id}
                            id={order.id}
                            orderGroupData={order}
                        />
                    ))}
            </div>
        </section>
    )
}

export default ChefOrderList
