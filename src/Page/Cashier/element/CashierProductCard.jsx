import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import ProductCard from "../../../atom/ProductCard"

function CashierProductCard({ id, code, name, price, image, isReady, stock, sold, category, quantity = 1 }) {
  const [orderData, addNewOrderData, updateOrderData] = useGetApiStore(state => [state.orderData, state.addNewOrderData, state.updateOrderData])
  const itemToOrderCart = { id, code, name, price, image, isReady, stock, sold, category, quantity, totalPrice: price * quantity }

  async function addToOrderCart(item) {
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
    <ProductCard>
      <ProductCard.Image image={image} name={name} />
      <ProductCard.Footer name={name} price={price} button={<ProductCard.CashierButton onAddToOrderCart={() => addToOrderCart(itemToOrderCart)} />} />
    </ProductCard>
  )
}

export default CashierProductCard
