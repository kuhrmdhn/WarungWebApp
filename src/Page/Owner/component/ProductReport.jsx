import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import ProgressCard from "../element/ProgressCard"

function ProductReport() {
    const productData = useGetApiStore(state => state.productData)
  return (
    <section className="w-full h-full">
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak"} max={1200} value={110} />
      <ProgressCard name={"Inazuma"} max={10} value={4} />
      <ProgressCard name={"Susu Inazuma"} max={100} value={1} />
      <ProgressCard name={" Inazuma"} max={120} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
      <ProgressCard name={"Susu Luwak Inazuma"} max={1200} value={110} />
    </section>
  )
}

export default ProductReport
