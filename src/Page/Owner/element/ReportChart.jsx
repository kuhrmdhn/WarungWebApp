import { useState } from "react"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { FormControl, MenuItem, Select } from "@mui/material"
import { FormatRupiah } from "@arismun/format-rupiah"
import SectionTitle from "../../../atom/SectionTitle"
import Charts, { ArcElement, Legend, Tooltip } from "chart.js/auto"
import { Bar } from "react-chartjs-2"

function ReportChart() {
    Charts.register(ArcElement, Tooltip, Legend)
    const [selectProductCategory, setSelectProductCategory] = useState("Makanan")
    const productData = useGetApiStore(state => state.productData)
    const productDataSlice = productData.slice()
    const filteredProductByCategory = productDataSlice.filter((item) => item.category === selectProductCategory)
    const getSoldProduct = filteredProductByCategory.map((item) => item.sold)
    const getProductIncome = filteredProductByCategory.map((item) => item.sold * item.price)
    const totalIncome = getProductIncome.reduce((acc, prev) => acc + prev, 0)
    const totalSold = getSoldProduct.reduce((acc, prev) => acc + prev, 0)
    const productChartData = {
        labels: filteredProductByCategory.map((item) => item.name),
        datasets: [{
            label: "Total Penjualan",
            data: filteredProductByCategory.map((item) => item.sold),
            backgroundColor: ["#7C41F5", "#F5C525"],
        }],
    }

    function handleChangeCategory(e) {
        setSelectProductCategory(e.target.value)
    }
    return (
        <section className="w-full h-max lg:h-96">
            <SectionTitle>
                <SectionTitle.SubTitle subTitle={"Laporan Penjualan"} />
            </SectionTitle>
            <div className="h-5/6 lg:h-full w-full flex flex-col lg:flex-row gap-5 justify-around items-center lg:mt-8">
                <div className="lg:h-full sm:w-4/5 lg:w-1/2 flex flex-col justify-start items-start gap-3">
                    <span className="w-16 h-4 sm:w-20 lg:w-28 text-3xs sm:text-2xs md:text-base">
                        <FormControl sx={{ width: "inherit", height: "inherit", background: "inherit", fontSize: "inherit" }}>
                            <Select variant="standard" color="primary" sx={{ fontSize: "inherit" }} onChange={handleChangeCategory} value={selectProductCategory}>
                                <MenuItem value="Makanan">Makanan</MenuItem>
                                <MenuItem value="Minuman">Minuman</MenuItem>
                                <MenuItem value="Cemilan">Cemilan</MenuItem>
                            </Select>
                        </FormControl>
                    </span>
                    <Bar data={productChartData} />
                </div>
                <table className="h-36 lg:h-1/2 w-5/6 lg:w-1/3 text-2xs lg:text-base">
                    <tbody>
                        <tr className="border-b border-owner-primary">
                            <td>Jumlah Produk</td>
                            <td>{filteredProductByCategory.length}</td>
                        </tr>
                        <tr className="border-b border-owner-primary">
                            <td>Total Terjual</td>
                            <td>{totalSold}</td>
                        </tr>
                        <tr className="border-b border-owner-primary">
                            <td>Total Pendapatan</td>
                            <td>
                                <FormatRupiah value={totalIncome} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ReportChart