import { faWallet, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartOrder } from "../../../../Zustand/CartOrder/CartOrderStore"
import { Suspense, lazy } from "react"
import OrderCardSkeleton from "../../../molecul/OrderCardSkeleton"
import { FormatRupiah } from "@arismun/format-rupiah"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import Swal from "sweetalert2"
import { useForm } from "../../../../Zustand/Form/FormStore"
const OrderCartList = lazy(() => import("../component/OrderCartList"))

function OrderCartTemplate() {
    const setCartOrderShow = useCartOrder(state => state.setCartOrderShow)
    const updateProductData = useForm(state => state.updateProductData)
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
                stock: data.stock - data.quantity,
                sold: data.sold + data.quantity,
                category: data.category
            }
            updateProductData(newData)
        });

        payOrderCart(dataToPost)
        Swal.fire({
            title: "Pembayaran Sukses!",
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
            toast: true,
            position: "top-left"
        })
    }

    return (
        <section className="h-full w-full">
            <header className="w-full h-24 md:h-32 xl:h-1/6 bg-white relative flex justify-center items-center border border-gray-600">
                <h1 className="text-2xl">Pesanan Anda</h1>
                {
                    window.innerWidth < 1024 &&
                    <button className="absolute top-5 right-5" aria-label="close order cart" type="button" onClick={() => setCartOrderShow()}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                }
            </header>
            <Suspense fallback={<OrderCardSkeleton />}>
                <OrderCartList orderData={orderData} />
            </Suspense>
            <div className="h-1/6 w-full flex flex-col gap-3 justify-center items-center bg-white border-t-2 px-3">
                <div className="w-full text-sm">
                    <FormatRupiah value={totalPrice} />
                </div>
                <button onClick={() => payOrder(orderData)} className="w-5/6 h-12 flex justify-center items-center gap-3 bg-green-600" role="button" aria-label="pay order button" name="pay order button" type="button">
                    Pay Now
                    <FontAwesomeIcon icon={faWallet} />
                </button>
            </div>
        </section>

    )
}

export default OrderCartTemplate
