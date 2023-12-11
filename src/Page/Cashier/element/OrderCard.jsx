import { FormatRupiah } from "@arismun/format-rupiah"
import { faBan, faCircleMinus, faCirclePlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"

function OrderCard({ id, code, name, price, image, isReady, stock, sold, category, quantity = 1 }) {
    const [updateOrderData, removeOrderItem] = useGetApiStore(state => [state.updateOrderData, state.removeOrderItem])
    const orderItem = { id, code, name, price, image, isReady, stock, sold, category, quantity }

    function incrementQuantity() {
        const updatedIncrementQuantity = {
            ...orderItem,
            quantity: quantity + 1, 
            totalPrice: price * (quantity + 1)
        }
        updateOrderData(id, updatedIncrementQuantity)
    }
    function decrementQuantity() {
        const updatedDecrementQuantity = {
         ...orderItem,
            quantity: quantity - 1,
            totalPrice: price * (quantity - 1)
        }
        if(updatedDecrementQuantity.quantity === 0) {
            removeOrderItem(updatedDecrementQuantity.id)
        } else {
            updateOrderData(id, updatedDecrementQuantity)
        }
    }
    function handleInputQuantity(value) {
        const newQuantity = Number(value);
        const updatedInputQuantity = {
            ...orderItem,
            quantity: newQuantity,
            totalPrice: price * newQuantity
        }
        updateOrderData(id, updatedInputQuantity)
    }

    return (
        <section className="w-full h-20 flex items-center border border-gray-400 bg-white my-2">
            <div className="w-1/3 h-full flex justify-evenly items-center">
                <button onClick={decrementQuantity} className="w-1/3 text-red-500 text-xl" aria-label="decrement quantity" type="button" name="quantity minus button">
                    <FontAwesomeIcon icon={faCircleMinus}/>
                </button>
                <input onChange={(e) =>handleInputQuantity(e.target.value)} value={quantity} className="w-1/3 input-quantity border-b border-gray-700 text-center" type="number" name="quantity input" id="inputQuantity"/>
                <button onClick={incrementQuantity} className="w-1/3 text-green-500 text-xl" aria-label="increment quantity" type="button" name="quantity plus button">
                    <FontAwesomeIcon icon={faCirclePlus} />
                </button>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-around items-center">
                <p>{name}</p>
                <FormatRupiah value={price} />
            </div>
            <div className="w-1/4 h-full flex justify-center items-center">
                <button onClick={() => removeOrderItem(id)} className="text-red-500 text-xl" aria-label="remove order item" type="button" name="remove order list button">
                    <FontAwesomeIcon icon={faBan} />
                </button>
            </div>
        </section>
    )
}

export default OrderCard
