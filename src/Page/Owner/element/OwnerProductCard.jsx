import { useForm } from "../../../../Zustand/Form/formStore"
import ProductCard from "../../../atom/ProductCard"

function OwnerProductCard({ id, code, name, price, image, isReady, category, stock }) {
  const productData = { id, code, name, price, image, isReady, category, stock }
  const [setEditProductForm, setInitialProductData] = useForm(state => [state.setEditProductForm, state.setInitialProductData])

  function editProduct() {
    setEditProductForm()
    setInitialProductData(productData)
  }

  return (
    <ProductCard>
      <ProductCard.Image image={image} name={name} />
      <ProductCard.Footer name={name} price={price} button={<ProductCard.OwnerButton editProduct={editProduct} />} />
    </ProductCard>
  )
}

export default OwnerProductCard
