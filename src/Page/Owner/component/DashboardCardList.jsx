import { AttachMoney, Category, Sell, ShoppingBasket } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { FormatRupiah } from "@arismun/format-rupiah"
import DashboardCard from "../../../atom/DashboardCard"
import SectionTitle from "../../../atom/SectionTitle"

function DashboardCardList() {
  const [productData, categoryData] = useGetApiStore(state => [state.productData, state.categoryData])
  const eachSoldProduct = productData.map(item => item.sold)
  const eachCurrentProductIncome = productData.map(item => item.sold * item.price)
  const totalSoldProduct = eachSoldProduct.reduce((acc, prev) => acc + prev, 0)
  const currentIncome = eachCurrentProductIncome.reduce((acc, prev) => acc + prev, 0)

  const cardData = [
    {
      id: 11,
      title: productData.length,
      detail: "Total Produk",
      icon: <ShoppingBasket fontSize="inherit" />
    },
    {
      id: 12,
      title: categoryData.length,
      detail: "Kategori Produk",
      icon: <Category fontSize="inherit" />
    },
    {
      id: 13,
      title: <FormatRupiah value={currentIncome} />,
      detail: "Pendapatan",
      icon: <AttachMoney fontSize="inherit" />
    },
    {
      id: 14,
      title: totalSoldProduct,
      detail: "Produk Terjual",
      icon: <Sell fontSize="inherit" />
    }
  ]
  return (
    <section className="w-full h-32 lg:h-max flex flex-col">
      <SectionTitle>
        <SectionTitle.SubTitle subTitle={"Ringkasan"} />
      </SectionTitle>
      <div className="w-full h-full lg:h-24 xl:h-28 webkit-scroll-bar lg:mt-5 lg:px-5 flex justify-between gap-5 lg:gap-0 items-center">
        {
          cardData.map((data) => (
            <DashboardCard
              key={data.id}
              title={data.title}
              detail={data.detail}
              icon={data.icon}
            />
          ))
        }
      </div>
    </section>
  )
}

export default DashboardCardList
