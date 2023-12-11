import { useEffect, useState } from "react"
import { useForm } from "../../../../Zustand/Form/formStore"
import Form from "../../../atom/Form"
import PreviewProductCard from "./PreviewProductCard"
import Swal from "sweetalert2"
import { Button } from "@mui/material"

function EditProductForm() {
    const [initialProductData, editProductForm, setEditProductForm, updateProductData] = useForm(state => [state.initialProductData, state.editProductForm, state.setEditProductForm, state.updateProductData])
    const [formData, setFormData] = useState(initialProductData)
    const [inputImageType, setInputImageType] = useState("text")
    useEffect(() => {
        setFormData({
            id: initialProductData.id,
            code: initialProductData.code,
            name: initialProductData.name,
            price: initialProductData.price,
            image: initialProductData.image,
            isReady: initialProductData.isReady,
            stock: initialProductData.stock,
            category: initialProductData.category.name
        })
    }, [initialProductData])

    const inputData = [
        {
            id: 1,
            inputName: "name",
            name: "Nama Produk",
            type: "text",
            value: formData.name,
            placeholder: "Nama Produk..."
        },
        {
            id: 2,
            inputName: "price",
            name: "Harga Produk",
            type: "number",
            value: formData.price,
            placeholder: "Harga Produk..."
        },
        {
            id: 3,
            inputName: "image",
            name: "Gambar Produk",
            type: inputImageType,
            value: formData.image,
            placeholder: "Gambar Produk..."
        },
        {
            id: 4,
            inputName: "stock",
            name: "Stok Tersedia",
            type: "number",
            value: formData.stock,
            placeholder: "Stok Produk Tersedia"
        }
    ]
    const selectData = [
        {
            id: 4,
            selectName: "isReady",
            name: "Status Produk",
            value: formData.isReady,
            optionData: [
                {
                    id: 1,
                    value: true,
                    option: "Stok Tersedia"
                },
                {
                    id: 2,
                    value: false,
                    option: "Stok Kosong"
                }
            ]
        },
        {
            id: 5,
            selectName: "category",
            name: "Kategori Produk",
            value: formData.category.name,
            optionData: [
                {
                    id: 1,
                    value: "Makanan",
                    option: "Makanan"
                },
                {
                    id: 2,
                    value: "Minuman",
                    option: "Minuman"
                },
                {
                    id: 3,
                    value: "Cemilan",
                    option: "Cemilan"
                }
            ]
        }
    ]

    function closeForm() {
        setEditProductForm()
    }

    function setImageInputType(e) {
        setInputImageType(e.target.value)
    }

    function handleOnChange(e) {
        const name = e.target.name
        const value = e.target.value
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const categoryIndex = ["Makanan", "Minuman", "Cemilan"]
        const editedData = {
            id: formData.id,
            code: formData.code,
            name: formData.name,
            price: JSON.parse(formData.price),
            image: formData.image,
            isReady: JSON.parse(formData.isReady),
            stock: JSON.parse(formData.stock),
            category: {
                id: categoryIndex.indexOf(formData.category) + 1,
                name: formData.category
            }
        }
        updateProductData(editedData)
        Swal.fire({icon: "success", text: "Update Data Sukses, Muat Ulang Halaman?"})
        .then((isConfirm) => {
            if(isConfirm) {
                window.location.reload()
            }
        })
    }

    return (
        editProductForm &&
        <Form onSubmit={(e) => handleSubmit(e)}>
            <table className="w-full h-1/2 sm:w-2/3 sm:h-2/5 lg:h-2/3 lg:w-1/2">
                <tbody className="w-full h-full flex flex-col items-center justify-around">
                    {
                        inputData.map((data) => (
                            <tr className="h-8 w-full flex items-center justify-between px-2" key={data.id}>
                                <th>
                                    <label className="text-xs md:text-sm lg:text-base" htmlFor={data.inputName}>
                                        {data.name}
                                    </label>
                                </th>
                                <td className="w-2/3">
                                    <Form.Input
                                        name={data.name}
                                        inputName={data.inputName}
                                        placeholder={data.placeholder}
                                        type={data.type}
                                        value={data.value}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    <tr className="h-8 w-full flex items-center justify-between px-2">
                        <th>
                            <label htmlFor="handleUrlType">Tipe Input Gambar</label>
                        </th>
                        <td className="w-2/3">
                            <select onChange={(e) => setImageInputType(e)} value={inputImageType} name="select input image" id="handleUrlType" className="h-8 w-full sm:h-10 lg:h-12 text-xs md:text-sm lg:text-base border-2 border-gray-600 rounded-md px-3">
                                <option value="text">Lokal (File Direktori)</option>
                                <option value="url">URL (Browser Internet)</option>
                            </select>
                        </td>
                    </tr>
                    {
                        selectData.map((data) => (
                            <tr className="h-8 w-full flex items-center justify-between px-3" key={data.id}>
                                <th>
                                    <label className="text-xs md:text-sm lg:text-base" htmlFor={data.selectName}>{data.name}</label>
                                </th>
                                <td className="w-2/3">
                                    <Form.Select
                                        name={data.name}
                                        optionData={data.optionData}
                                        selectName={data.selectName}
                                        value={data.value}
                                        onChange={(e) => handleOnChange(e)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                    <tr className="w-full h-10 px-3">
                        <td className="w-full h-full flex justify-end items-center gap-4">
                            <Button onClick={closeForm} color="error" variant="contained" className="w-20 h-8 text-xs md:text-sm lg:text-base" type="submit">Batal</Button>
                            <Button color="success" variant="contained" className="w-20 h-8 text-xs md:text-sm lg:text-base bg-green-500" type="submit">Simpan</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <section>
                <PreviewProductCard
                    image={formData.image}
                    name={formData.name}
                    price={formData.price}
                />
            </section>
        </Form>
    )
}

export default EditProductForm
