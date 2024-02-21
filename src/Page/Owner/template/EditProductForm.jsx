import Swal from "sweetalert2"
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material"
import { TextField } from "@mui/material"
import { useFormStore } from "../../../../Zustand/Form/FormStore"
import { ArrowBackIos } from "@mui/icons-material"
import PreviewProductCard from "../../../atom/PreviewProductCard"

function EditProductForm() {
    const [productData, editProductForm, setEditProductForm, updateProductData, handleOnChange, deleteProduct] = useFormStore(state => [
        state.productData,
        state.editProductForm,
        state.setEditProductForm,
        state.updateProductData,
        state.handleOnChange,
        state.deleteProduct
    ])
    const inputData = [
        {
            id: 1,
            name: "name",
            label: "Nama Produk",
            type: "text",
            value: productData.name,
        },
        {
            id: 2,
            name: "price",
            label: "Harga Produk",
            type: "number",
            value: productData.price,
        },
        {
            id: 3,
            name: "image",
            label: "Gambar Produk",
            type: "text",
            value: productData.image,
        },
        {
            id: 4,
            name: "stock",
            label: "Stok Tersedia",
            type: "number",
            value: productData.stock,
        },
        {
            id: 5,
            name: "sold",
            label: "Terjual",
            type: "number",
            value: productData.sold,
        }
    ]
    const selectData = [
        {
            id: 6,
            selectName: "isReady",
            name: "Status Produk",
            value: productData.isReady,
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
            id: 7,
            selectName: "category",
            name: "Kategori Produk",
            value: productData.category,
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

    function handleDeleteProduct(product) {
        Swal.fire({ icon: "question", text: `Hapus ${product.name} Dari Daftar Produk?`, showDenyButton: true })
            .then((response) => {
                if (response.isConfirmed) {
                    deleteProduct(product)
                    Swal.fire({ icon: "question", text: "Edit Produk Lain?", confirmButtonText: "Ya", showConfirmButton: true, cancelButtonText: "Tidak", showCancelButton: "true" })
                        .then((status) => {
                            if (status.isDismissed) {
                                window.location.reload()
                            } else {
                                closeForm()
                            }
                        })
                } else {
                    return
                }
            })
    }

    function closeForm() {
        setEditProductForm()
    }

    function handleSubmit(e) {
        e.preventDefault()
        const editedData = {
            id: productData.id,
            code: productData.code,
            name: productData.name,
            price: parseFloat(productData.price),
            image: productData.image,
            isReady: productData.stock == 0 ? false : true,
            stock: JSON.parse(productData.stock),
            sold: parseFloat(productData.sold),
            category: productData.category
        }
        if (productData.isReady === true && productData.stock === 0) {
            Swal.fire({ icon: "warning", text: "Stok Tidak Boleh Kosong/Nol", toast: true, position: "top-right", showConfirmButton: false, timer: 3000, timerProgressBar: true })
        } else {
            Swal.fire({ icon: "success", text: "Update Data Sukses, Muat Ulang Halaman?", showCancelButton: true, cancelButtonText: "Edit Produk Lagi" })
                .then((status) => {
                    if (status.isConfirmed) {
                        updateProductData(editedData)
                        window.location.reload()
                    } else {
                        closeForm()
                    }
                })
        }
    }

    return (
        editProductForm &&
        <section className="w-full h-screen fixed top-0 left-0 z-30 flex items-start justify-center backdrop-blur-sm overflow-y-auto">
            <form onSubmit={(e) => handleSubmit(e)} className="w-full lg:w-1/3 h-fit min-h-full border-2 border-slate-800 bg-white flex flex-col gap-4 items-center pt-2">
                <div className="h-8 w-full flex justify-start items-center pl-3">
                    <IconButton onClick={closeForm}>
                        <ArrowBackIos />
                    </IconButton>
                </div>
                <div className="w-full flex justify-center mb-5">
                    <PreviewProductCard
                        image={productData.image}
                        name={productData.name}
                        price={productData.price}
                    />
                </div>
                <div className="h-max w-full flex flex-col items-center gap-3">
                    {
                        inputData.map((data) => (
                            <FormControl key={data.id} className="w-5/6 flex flex-col gap-3">
                                <TextField
                                    onChange={(e) => handleOnChange(e, "productData")}
                                    key={data.id}
                                    name={data.name}
                                    type={data.type}
                                    label={data.label}
                                    value={data.value}
                                />
                            </FormControl>
                        ))
                    }
                    {
                        selectData.map((data) => (
                            <FormControl key={data.id} className="w-5/6 flex flex-col gap-3">
                                <InputLabel id={data.selectName}>{data.name}</InputLabel>
                                <Select
                                    required
                                    labelId={data.selectName}
                                    label={data.name}
                                    value={data.value}
                                    name={data.selectName}
                                    onChange={(e) => handleOnChange(e, "productData")}
                                >
                                    {
                                        data.optionData.map((data) => (
                                            <MenuItem key={data.id} value={data.value}>{data.option}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        ))
                    }
                </div>
                <div className="h-24 w-full flex justify-center items-center gap-5">
                    <Button onClick={() => handleDeleteProduct(productData)} type="button" variant="contained" color="error" sx={{ fontFamily: "inherit", fontSize: "12px" }} >Hapus Produk</Button>
                    <Button type="submit" variant="contained" color="primary" sx={{ fontFamily: "inherit", fontSize: "12px" }} >Simpan Hasil Edit</Button>
                </div>
            </form>
        </section>
    )
}

export default EditProductForm
