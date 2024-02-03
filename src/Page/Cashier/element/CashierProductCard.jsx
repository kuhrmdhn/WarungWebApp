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
  }

  return (
    <ProductCard>
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
    </ProductCard>
  )
}

export default CashierProductCard
