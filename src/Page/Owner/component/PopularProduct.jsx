import { FormatRupiah } from "@arismun/format-rupiah"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import SectionTitle from "../../../atom/SectionTitle"
import EmptyProduct from "../../../atom/EmptyProduct"

function PopularProduct() {
    const productData = useGetApiStore(state => state.productData)
    const productDataSlice = productData.slice()
    const sortProductData = productDataSlice.sort((a, b) => b.sold - a.sold)
    const filterShortedData = sortProductData.filter((data) => data.sold > 0)
    const topPopularProduct = filterShortedData.slice(0, 5)

    return (
        <section className="h-max w-full text-2xs sm:text-sm">
            <SectionTitle>
                <SectionTitle.SubTitle subTitle={"Produk Populer"} />
            </SectionTitle>
            <div className="w-full h-96 flex justify-center lg:mt-8">
                <table className="w-full lg:w-11/12 h-full text-left">
                    <thead className="h-1/6 w-full bg-gray-200">
                        <tr className="h-full w-full">
                            <th className="lg:pl-7 w-96">Nama</th>
                            <th className="w-96">Harga</th>
                            <th className="w-96">Stok</th>
                            <th className="w-96">Terjual</th>
                            <th className="w-96">Pendapatan</th>
                        </tr>
                    </thead>
                    {
                        topPopularProduct.length <= 0 ?
                            <tbody className="h-5/6 w-full">
                                <tr>
                                    <td colSpan={4}>
                                        <EmptyProduct details={"Belum ada produk"} />
                                    </td>
                                </tr>
                            </tbody>
                            :
                            <tbody className="h-5/6 w-full text-3xs sm:text-xs lg:text-base">
                                {
                                    topPopularProduct.map((data) => (
                                        <tr className="border-b border-gray-300" key={data.id}>
                                            <td className="lg:pl-7 w-fit">{data.name}</td>
                                            <td><FormatRupiah value={data.price} /></td>
                                            <td>{data.stock}</td>
                                            <td>{data.sold}</td>
                                            <td><FormatRupiah value={data.sold * data.price} /></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                    }
                </table>
            </div>
        </section>
    )
}

export default PopularProduct
