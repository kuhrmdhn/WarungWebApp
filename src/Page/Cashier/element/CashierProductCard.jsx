<<<<<<< HEAD
import ProductCard from "../../../atom/ProductCard"

function CashierProductCard({ id, code, name, price, image, isReady, stock, sold, category, quantity = 1 }) {
  const isSoldOut = stock === 0 || !isReady
  const itemToOrderCart = {
    id,
    code,
    name,
    price,
    image,
    isReady,
    stock,
    sold,
    category,
    quantity,
    totalPrice: price * quantity
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  }

  return (
    <ProductCard>
<<<<<<< HEAD
      <section className="relative">
        {
          isSoldOut ?
            <div>
              <picture className="w-full h-fit flex justify-center items-center absolute top-0 backdrop-grayscale">
                <img className="w-full aspect-square" src="/images/assets/sold-out-banner.webp" alt="Sold Out Icon" />
              </picture>
              <ProductCard.Image image={image} name={name} />
              <ProductCard.Footer name={name} price={price} />
            </div>
            :
            <div>
              <ProductCard.Image image={image} name={name} />
              <ProductCard.Footer name={name} price={price} button={<ProductCard.AddCartButton item={itemToOrderCart} />} />
            </div>
        }
      </section>
=======
      <ProductCard.Image image={image} name={name} />
      <ProductCard.Footer name={name} price={price} button={<ProductCard.CashierButton onAddToOrderCart={() => addToOrderCart(itemToOrderCart)} />} />
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    </ProductCard>
  )
}

<<<<<<< HEAD
export default CashierProductCard
=======
export default CashierProductCard
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
