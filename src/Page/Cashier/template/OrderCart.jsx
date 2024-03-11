import { Suspense, lazy } from "react"
import Swal from "sweetalert2"
import { Box, Button, Drawer, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
import { FormatRupiah } from "@arismun/format-rupiah"
import { useCartOrder } from "../../../../Zustand/CartOrder/CartOrderStore"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useFormStore } from "../../../../Zustand/Form/FormStore"
import OrderCardSkeleton from "../../../skeleton/OrderCardSkeleton"
const OrderCartList = lazy(() => import("../component/OrderCartList"))

function OrderCart() {
    const updateProductData = useFormStore(state => state.updateProductData)
    const [cartOrderShow, setCartOrderShow] = useCartOrder(state => [state.cartOrderShow, state.setCartOrderShow])
    const [orderData, payOrderCart, fetchApi] = useGetApiStore(state => [state.orderData, state.payOrderCart, state.fetchApi])
    
    const getTotalPriceData = orderData.map(data => data.totalPrice)
    const totalPrice = getTotalPriceData.reduce((acc, prev) => acc + prev, 0)

    function closeOrderCart() {
        setCartOrderShow(false)
    }

    async function payOrder() {
        if (orderData.length === 0) {
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
        closeOrderCart()
        orderData.forEach(data => {
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
        const { value: name } = await Swal.fire({
            inputLabel: "Nama Pemesan",
            input: "text",
            inputValidator: (value) => {
                if (!value) {
                    return "Wajib di isi"
                }
            },
            showCloseButton: true
        })
        if (name) {
            Swal.fire({
                icon: "success",
                text: "Pembayaran Berhasil!",
                toast: true,
                timer: 1200,
                showConfirmButton: false,
                position: "top-right"
            })
            payOrderCart({ buyer: name, data: orderData })
        }
        fetchApi()
    }

    return (
        <Drawer open={cartOrderShow} onClose={closeOrderCart} anchor="right">
            <Box className="w-[34vw] h-full bg-white">
                <header className="h-12 w-full pl-2 pt-2">
                    <IconButton onClick={closeOrderCart} color="primary">
                        <Close />
                    </IconButton>
                </header>
                <Suspense fallback={<OrderCardSkeleton/>}>
                    <OrderCartList />
                </Suspense>
                <section className="h-1/6 w-full flex flex-col justify-evenly px-5 border-t">
                    <FormatRupiah value={totalPrice} />
                    <Button onClick={payOrder} color="primary" variant="contained" fullWidth>
                        Bayar
                    </Button>
                </section>
            </Box>
        </Drawer>
    )
}

export default OrderCart
