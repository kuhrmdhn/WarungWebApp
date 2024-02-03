import { FormatRupiah } from "@arismun/format-rupiah"
import { Add, Autorenew, Edit, Payment, ShoppingCartSharp } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useFormStore } from "../../Zustand/Form/FormStore"
import { useGetApiStore } from "../../Zustand/Api/ApiStore"
import Swal from "sweetalert2";

function ProductCard({ children }) {
    return (
        <section className="h-64 lg:h-72 w-44 lg:w-48 bg-white relative flex flex-col items-center border border-gray-700 rounded-md">
            {children}
        </section>
    )
}

function Image({ image, name }) {
    return (
        <section>
            <img src={image} alt={`${name} Image`} loading="lazy" className="w-full rounded-md aspect-square" />
        </section>
    )
}

function Detail({ stock, sold }) {
    return (
        <div className="h-10 w-full flex justify-around items-center text-xs">
            <p>Stok : {stock}</p>
            <p>Terjual : {sold}</p>
        </div>
    )
}

function Footer({ name, price, button, resetButton }) {
    return (
        <section className="w-full h-20 lg:h-32 flex flex-col items-center text-xs sm:text-sm md:text-base">
            <div className="w-full h-8 flex items-center justify-center">
                {name}
            </div>
            <div className="w-full h-fit sm:h-3/5 flex justify-around items-center text-2xs xs:text-xs md:text-sm">
                <FormatRupiah value={price} />
                {resetButton}
                {button}
            </div>
        </section>
    )
}

function AddCartButton({ item }) {
    const [orderData, addNewOrderData, updateOrderData] = useGetApiStore(state => [state.orderData, state.addNewOrderData, state.updateOrderData])
    function addToOrderCart() {
        const index = orderData.findIndex(data => data.id === item.id)
        if (index === -1) {
            addNewOrderData(item)
        } else {
            const newQuantity = orderData[index].quantity + 1
            const updateData = {
                ...orderData[index],

                quantity: newQuantity,
                totalPrice: orderData[index].price * newQuantity
            }
            updateOrderData(orderData[index].id, updateData)
        }
    }
    return (
        <button onClick={addToOrderCart} className="h-8 w-16 lg:w-20 flex justify-center items-center gap-2 hover:bg-slate-300 hover:text-cashier-primary bg-cashier-primary text-white rounded-md duration-300 text-2xs" aria-label="add to order cart button" title="add to order cart button">
            <Add fontSize="small" />
        </button>
    )
}

function EditButton({ data }) {
    const [setEditProductForm, setProductData] = useFormStore(state => [state.setEditProductForm, state.setProductData])
    function editProduct() {
        setEditProductForm()
        setProductData(data)
    }
    return (
        <IconButton variant="contained" sx={{ color: "#7A1DE0" }} onClick={editProduct} aria-label="edit product button" title="Edit Data Produk">
            <Edit fontSize="small" />
        </IconButton>
    )
}

function ResetDataButton({ data }) {
    const resetSoldData = useGetApiStore(state => state.resetSoldData)
    function resetData() {
        if (data.sold <= 0) {
            Swal.fire({
                icon: "warning",
                title: `Tidak dapat me-reset data penjualan ${data.name}, karena masih kosong  `,
                customClass: { title: "text-lg", footer: "text-sm" }
            })
            return
        }
        Swal.fire({
            icon: "question",
            showDenyButton: true,
            denyButtonText: "Tidak",
            confirmButtonText: "Ya",
            focusDeny: true,
            title: `Yakin me-reset data penjualan ${data.name}?`,
            footer: "Setelah me-reset data anda bisa mengatur stok di form edit",
            customClass: { title: "text-lg", footer: "text-sm" }
        })
            .then((result) => {
                if (result.isDenied) {
                    return
                }
                window.location.reload()
                resetSoldData(data)
            })
    }

    return (
        <IconButton variant="contained" sx={{ color: "red" }} onClick={resetData} aria-label="reset product sold data button" title="Reset Data Penjualan">
            <Autorenew fontSize="small" />
        </IconButton>
    )
}


ProductCard.Image = Image
ProductCard.Detail = Detail
ProductCard.Footer = Footer
ProductCard.AddCartButton = AddCartButton
ProductCard.EditButton = EditButton
ProductCard.ResetDataButton = ResetDataButton
export default ProductCard
