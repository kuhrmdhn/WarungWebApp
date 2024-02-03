import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react"
import Swal from "sweetalert2"
import { useFormStore } from "../../../../Zustand/Form/FormStore"
import PreviewProductCard from "../../../atom/PreviewProductCard"
import SectionTitle from "../../../atom/SectionTitle"
import { initialProductData } from "../../../../Zustand/Form/FormStore"

function AddProductForm() {
    const [inputImageType, setInputImageType] = useState()
    const [cancelButton, setCancelButton] = useState(false)
    const [newProductData, handleOnChange, addNewProduct, setNewProductData] = useFormStore(state =>
        [
            state.newProductData,
            state.handleOnChange,
            state.addNewProduct,
            state.setNewProductData
        ])

    const inputData = [
        {
            id: 1,
            placeholder: "Nama Produk",
            name: "name",
            value: newProductData.name,
            type: "text",
            required: true
        },
        {
            id: 2,
            placeholder: "Harga Produk",
            name: "price",
            value: newProductData.price,
            type: "number",
            required: true
        },
        {
            id: 4,
            placeholder: "Stok Produk",
            name: "stock",
            value: newProductData.stock,
            type: "number",
            required: true
        },
        {
            id: 3,
            placeholder: "Gambar Produk",
            name: "image",
            value: newProductData.image,
            type: inputImageType,
            required: false
        }
    ]
    const optionData = [
        {
            id: 4,
            labelId: "productStatus",
            value: newProductData.isReady,
            name: "isReady",
            placeholder: "Status Produk",
            menuItem: [
                {
                    id: 1,
                    value: true,
                    option: "Produk Tersedia",
                },
                {
                    id: 2,
                    value: false,
                    option: "Produk Belum Tersedia"
                }
            ]

        },
        {
            id: 5,
            labelId: "productCategory",
            value: newProductData.category,
            name: "category",
            placeholder: "Kategori Produk",
            menuItem: [
                {
                    id: 3,
                    value: "Makanan",
                    option: "Makanan"
                },
                {
                    id: 4,
                    value: "Minuman",
                    option: "Minuman"
                },
                {
                    id: 5,
                    value: "Cemilan",
                    option: "Cemilan"
                }
            ]
        }
    ]
    function setImageInputType(e) {
        setInputImageType(e.target.value)
    }
    function resetInputValue() {
        setNewProductData(initialProductData)
        setCancelButton(false)
    }
    function handleSubmit(e) {
        e.preventDefault()
        Swal.fire({
            icon: "success",
            text: "Produk Berhasil Ditambahkan",
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: "Tambah Produk Lagi"
        })
            .then(async (status) => {
                const date = new Date()
                const year = parseInt(date.getFullYear())
                const randomNum = parseInt((Math.random() * 1000).toFixed())
                const idGenerate = year + randomNum
                const id = idGenerate
                await addNewProduct({ ...newProductData, sold: 0, id, code: `K-${id}` })

                if (status.isConfirmed) {
                    window.location.reload()
                } else {
                    resetInputValue()
                }
            })
    }

    function onChange(e) {
        handleOnChange(e, "newProductData")
        setCancelButton(true)
    }

    return (
        <section id="addNewProduct" className="h-fit w-full mt-16 pt-6 pl-3 sm:pl-10 flex flex-col justify-around items-center">
            <SectionTitle>
                <SectionTitle.Title title={"Tambah Produk"} sizes={"large"} />
            </SectionTitle>
            <SectionTitle>
                <SectionTitle.SubTitle subTitle={"Data Produk"} />
            </SectionTitle>
            <div className="h-max w-full flex flex-col-reverse sm:flex-row items-center justify-evenly">
                <form onSubmit={(e) => handleSubmit(e)} className="h-full my-6 w-5/6 sm:w-2/5 flex flex-col gap-3 justify-center">
                    <FormControl className="flex flex-col gap-3">
                        {
                            inputData.map((data) => (
                                <TextField
                                    required={data.required}
                                    key={data.id}
                                    label={data.placeholder}
                                    value={data.value}
                                    name={data.name}
                                    type={data.type}
                                    onChange={(e) => onChange(e)}
                                    className={`${data.type === "number" && "input-number"} w-full`}
                                />
                            ))
                        }
                        <FormControl>
                            <InputLabel id="imageSource">Sumber Gambar</InputLabel>
                            <Select
                                labelId="imageSource"
                                onChange={(e) => setImageInputType(e)}
                                value={inputImageType}
                                label="Sumber Gambar"
                                name="select input image"
                            >
                                <MenuItem value={"text"}>Lokal (File Direktori)</MenuItem>
                                <MenuItem value={"url"}>URL (Browser Internet)</MenuItem>
                            </Select>
                        </FormControl>
                        {
                            optionData.map((data) => (
                                <FormControl key={data.id}>
                                    <InputLabel id={data.labelId}>{data.placeholder}</InputLabel>
                                    <Select
                                        required
                                        labelId={data.labelId}
                                        label={data.placeholder}
                                        value={data.value}
                                        name={data.name}
                                        onChange={(e) => onChange(e)}>
                                        {
                                            data.menuItem.map((data) => (
                                                <MenuItem key={data.id} value={data.value}>{data.option}</MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormControl>
                            ))
                        }
                    </FormControl>
                    <div className="w-full flex gap-4 items-center justify-end">
                        {
                            cancelButton && <Button onClick={resetInputValue} variant="contained" color="error" className="w-24 self-end" type="button">Batal</Button>
                        }
                        <Button variant="contained" color="primary" className="w-24 self-end" type="submit">Tambah</Button>
                    </div>
                </form>
                <PreviewProductCard
                    name={newProductData.name}
                    price={newProductData.price ? newProductData.price : 0}
                    image={newProductData.image}
                />
            </div>
        </section >
    )
}

export default AddProductForm