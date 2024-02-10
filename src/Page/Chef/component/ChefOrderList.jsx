import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useSearchKeyword } from "../../../../Zustand/SearchBar/SearchBarStore"
import OrderGroupCard from "../element/OrderGroupCard";

function ChefOrderList() {
    const searchOrderGroupItem = useSearchKeyword(state => state.searchOrderGroupItem)
    const orderGroupData = useGetApiStore(state => state.orderGroupData)
    let filterOrderGroup;
    if (searchOrderGroupItem != "") {
        filterOrderGroup = orderGroupData.filter(dataGroup => dataGroup.id == searchOrderGroupItem)
    } else {
        filterOrderGroup = orderGroupData
    }

    return (
        <section className="w-full h-5/6 bg-black pt-5 sm:pt-7 flex justify-center items-start webkit-scroll-bar">
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
