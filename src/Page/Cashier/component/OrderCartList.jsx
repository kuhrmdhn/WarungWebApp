import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import EmptyProduct from "../../../atom/EmptyProduct"
import OrderCard from "../element/OrderCard"

function OrderCartList() {
  const orderData = useGetApiStore(state => state.orderData)

  return (
    <div className="h-3/4 w-full px-2 overflow-y-auto overflow-x-hidden">
      {
        orderData.length === 0 ?
          <EmptyProduct details={"Keranjang Kosong!"} />
          :
          orderData.map((data) => (
            <OrderCard
              key={data.id}
              id={data.id}
              code={data.code}
              name={data.name}
              price={data.price}
              image={data.image}
              isReady={data.isReady}
              stock={data.stock}
              sold={data.sold}
              category={data.category}
              quantity={data.quantity}
            />
          ))
      }
    </div>
  )
}

export default OrderCartList
