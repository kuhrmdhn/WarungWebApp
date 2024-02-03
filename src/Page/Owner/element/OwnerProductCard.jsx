<<<<<<< HEAD
import { useState } from "react"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import ProductCard from "../../../atom/ProductCard"


function OwnerProductCard({ id, code, name, price, image, isReady, stock, sold, category }) {
  const [addCheckedList, setCheckedList, checkedList, onChecked] = useOwnerFeature(state => [
    state.addCheckedList,
    state.setCheckedList,
    state.checkedList,
    state.onChecked
  ])
  const productData = { id, code, name, price, image, isReady, stock, sold, category }
  const isSoldOut = stock === 0 || !isReady

  function handleOnChange(e) {
    if (e.target.checked) {
      addCheckedList(productData)

    } else {
      checkedList.splice(checkedList.indexOf(productData), 1)
      const removedItem = checkedList
      setCheckedList(removedItem)
    }
  }

  return (
    <section className="w-36 sm:w-44 lg:w-56 h-64 sm:h-80 lg:h-96 bg-white relative border border-gray-700 duration-200 rounded-md">
      <div className="relative">
        {
          onChecked &&
          <section className="absolute z-10 top-3 right-3">
            <input onChange={handleOnChange} className="h-5 w-5" type="checkbox" name="" id="" />
          </section>
        }
        {
          isSoldOut ?
            <section className="relative">
              <picture className="w-full h-fit flex justify-center items-center absolute top-0 backdrop-grayscale">
                <img className="w-full aspect-square" src="/images/assets/sold-out-banner.webp" alt="Sold Out Icon" />
              </picture>
              <ProductCard.Image
                image={image}
                name={name}
              />
              <ProductCard.Detail
                sold={sold}
                stock={stock}
              />
              <ProductCard.Footer
                name={name}
                price={price}
                button={<ProductCard.EditButton data={productData} />}
                resetButton={<ProductCard.ResetDataButton data={productData} />}
              />
            </section>
            :
            <section>
              <ProductCard.Image
                image={image}
                name={name}
              />
              <ProductCard.Detail
                sold={sold}
                stock={stock}
              />
              <ProductCard.Footer
                name={name}
                price={price}
                button={<ProductCard.EditButton data={productData} />}
                resetButton={<ProductCard.ResetDataButton data={productData} />}
              />
            </section>
        }
      </div>
    </section>
=======
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
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
  )
}

export default OwnerProductCard
