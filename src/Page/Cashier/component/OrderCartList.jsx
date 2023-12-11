import OrderCard from "../element/OrderCard"

function OrderCartList({ orderData }) {
  return (
    <div className="h-2/3 w-full px-2 webkit-scroll-bar">
      {
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
