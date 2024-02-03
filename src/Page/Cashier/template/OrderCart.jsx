import { Suspense, lazy } from "react"
import Swal from "sweetalert2"
import { IconButton } from "@mui/material"
import { AccountBalanceWallet, ArrowBack } from "@mui/icons-material"
import { FormatRupiah } from "@arismun/format-rupiah"
import { useCartOrder } from "../../../../Zustand/CartOrder/CartOrderStore"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useFormStore } from "../../../../Zustand/Form/FormStore"
import OrderCardSkeleton from "../../../molecul/OrderCardSkeleton"
const OrderCartList = lazy(() => import("../component/OrderCartList"))

function OrderCart() {
    const [cartOrderShow, setCartOrderShow] = useCartOrder(state => [state.cartOrderShow, state.setCartOrderShow])
    const updateProductData = useFormStore(state => state.updateProductData)
    const [orderData, payOrderCart] = useGetApiStore(state => [state.orderData, state.payOrderCart])
    const getTotalPriceData = orderData.map(data => data.totalPrice)
    const totalPrice = getTotalPriceData.reduce((acc, prev) => acc + prev, 0)

    function payOrder(dataToPost) {
        if (dataToPost.length === 0) {
            Swal.fire({
                title: "Keranjang Pesanan Masih Kosong!",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
                toast: true,
                position: "top-right",
            })
            return
        }
        dataToPost.forEach(data => {
            const newData = {
                id: data.id,
                code: data.code,
                name: data.name,
                price: data.price,
                image: data.image,
                isReady: data.isReady,
                stock: data.stock,
                sold: data.sold + data.quantity,
                category: data.category
            }
            updateProductData(newData)
        });
        payOrderCart({ data: dataToPost })
        Swal.fire({
            title: "Pembayaran Sukses!",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
            toast: true,
            position: "top-right"
        })
    }

    return (
        cartOrderShow &&
        <section className=" h-full w-full flex justify-center items-center fixed top-0 left-0 z-10 backdrop-blur-sm">
            <div className="w-full sm:w-2/3 lg:w-1/3 h-full flex flex-col justify-between bg-white relative">
                <div className="h-14 w-full flex items-center pl-1">
                    <IconButton onClick={setCartOrderShow}>
                        <ArrowBack />
                    </IconButton>
                </div>
                <div className="w-full h-5/6">
                    <Suspense fallback={<OrderCardSkeleton />}>
                        <OrderCartList />
                    </Suspense>
                </div>
                <div className="h-24 w-full flex justify-around items-center bg-white text-cashier-primary border-t-2 px-3">
                    <div className="w-1/4 flex gap-1">
                        <FormatRupiah value={totalPrice} />
                    </div>
                    <button onClick={() => payOrder(orderData)} className="w-1/2 h-12 flex justify-center items-center gap-3 bg-cashier-primary text-white text-sm rounded-md hover:bg-slate-300 hover:text-cashier-primary duration-300" type="button" title="Bayar Pesanan" >
                        Bayar Sekarang
                        <AccountBalanceWallet />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OrderCart
