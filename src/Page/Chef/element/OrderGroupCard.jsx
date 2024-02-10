import { CheckRounded } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import axios from "axios"

function OrderGroupCard({ orderGroupData }) {
    const setOrderGroupData = useGetApiStore(state => state.setOrderGroupData)

    async function deleteCompleteOrder(id) {
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/pesanans/${id}`);
            const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/pesanans`);
            setOrderGroupData(res.data);
        } catch (error) {
            console.error("Error deleting or fetching orders:", error);
        }
    }

    return (
        <section key={orderGroupData.id} className="w-full h-72 lg:h-80 pl-3 pt-3 text-xs bg-chef-primary text-white flex flex-col justify-center gap-5 rounded-md" >
            <header className="w-full h-12 flex flex-col items-start justify-center">
                <h1>No.Pesanan : {orderGroupData.id}</h1>
                <p>Banyak Pesanan : {orderGroupData.data.map(data => data.quantity).reduce((acc, prev) => acc + prev, 0)}</p>
            </header>
            <ul className="h-5/6 w-full flex flex-col gap-3 overflow-y-small px-3">
                {
                    orderGroupData.data.map((data) => (
                        <li key={data.id} className="w-full h-14 lg:h-20 pb-2 flex gap-3 border-b border-white">
                            <img src={data.image} alt={data.name} />
                            <div className="h-full flex flex-col justify-center items-start">
                                <p>{data.name}</p>
                                <p>x{data.quantity}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className="h-12 w-full flex items-center justify-end pr-5 mb-3">
                <button className="w-12 lg:w-16 h-7 lg:h-9 text-sm sm:text-lg lg:text-xl rounded-lg bg-chef-purple text-white hover:scale-95 duration-150" onClick={() => deleteCompleteOrder(orderGroupData.id)}>
                    <CheckRounded fontSize="inherit" sx={{ color: "#inherit" }} />
                </button>
            </div>
        </section >
    )
}
export default OrderGroupCard
