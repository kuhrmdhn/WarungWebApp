import { AttachMoney, Category, Sell, ShoppingBasket } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { FormatRupiah } from "@arismun/format-rupiah"
import SectionTitle from "../../../atom/SectionTitle"
import { Tabs } from "@mui/material"
import DashboardCard from "../element/DashboardCard"

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
    <section className="w-full h-36 lg:h-40 flex flex-col">
      <SectionTitle>
        <SectionTitle.SubTitle subTitle={"Ringkasan"} />
      </SectionTitle>
      <Tabs sx={{ height: "150px", paddingTop: "12px"}} variant="scrollable" allowScrollButtonsMobile scrollButtons="false">
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
      </Tabs>
    </section>
  )
}

export default DashboardCardList
