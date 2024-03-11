import PropTypes from 'prop-types';
import { FormatRupiah } from "@arismun/format-rupiah"
import { Button } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"

function CashierProductCard({ id, code, name, price, image, isReady, stock, sold, category }) {
  const isSoldOut = stock === 0 || !isReady
  const [orderData, addNewOrderData, updateOrderData] = useGetApiStore(state => [state.orderData, state.addNewOrderData, state.updateOrderData])
  const item = {
    id,
    code,
    name,
    price,
    image,
    isReady,
    stock,
    sold,
    category,
    quantity: 1,
    totalPrice: price * 1
  }
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
    <section className="h-80 w-52 border-2 bg-white rounded-xl font-montserrat shadow-sm shadow-gray-300">
      <div className="w-full relative">
        <img className="w-full aspect-square rounded-t-xl" src={image} alt={name} />
        {
          isSoldOut &&
          <div className="h-1/3 w-1/3 flex justify-center items-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black opacity-75 rounded-full text-white">
            Habis
          </div>
        }
      </div>
      <div className="h-1/3 w-full mt-3 text-black text-lg font-medium flex flex-col items-center">
        <h1>{name}</h1>
        <section className="w-full mt-3 flex justify-evenly">
          <FormatRupiah value={price} />
          {
            !isSoldOut &&
            <Button onClick={addToOrderCart} color="primary" variant="contained" size="small">
              <Add />
            </Button>
          }
        </section>
      </div>
    </section>
  )
}

CashierProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  isReady: PropTypes.bool.isRequired,
  stock: PropTypes.number.isRequired,
  sold: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
}

export default CashierProductCard
