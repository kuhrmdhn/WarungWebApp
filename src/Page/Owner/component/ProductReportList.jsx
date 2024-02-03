import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import OwnerFeatureButton from "../element/OwnerFeatureButton"
import ProgressCard from "../element/ProgressCard"

function ProductReportList() {
  const productReport = useOwnerFeature(state => state.productReport)
  const productData = useGetApiStore(state => state.productData)
  const filteredProductData = productData

  return (
    <section className={`h-full webkit-scroll-bar relative ${productReport ? "left-0 z-0 w-full" : "-left-full -z-10 w-0"} duration-300`}>
      <div className="h-12 w-full">
        <OwnerFeatureButton />
      </div>
      <section>
        {
          filteredProductData.map((data) => (
            <ProgressCard
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
            />
          ))
        }
      </section>
    </section>
  )
}

export default ProductReportList
