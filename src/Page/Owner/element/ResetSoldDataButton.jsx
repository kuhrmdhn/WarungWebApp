import Swal from "sweetalert2"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import { Button } from "@mui/material"

function ResetSoldDataButton() {
    const [productData, resetSoldData] = useGetApiStore(state =>
        [
            state.productData,
            state.resetSoldData
        ])
    const [checkedList, setCheckedList, onChecked, setOnChecked] = useOwnerFeature(state =>
        [
            state.checkedList,
            state.setCheckedList,
            state.onChecked,
            state.setOnChecked,
        ])

    function resetChoosingCard() {
        if (checkedList.length <= 0) {
            Swal.fire({
                icon: "warning",
                title: "Tidak dapat me-reset",
                text: "Belum ada produk yang di pilih, centang pada card produk untuk memilih",
                timer: 5000,
                showCloseButton: false,
            })
            return
        }
        Swal.fire({
            icon: "question",
            title: "Yakin me-reset data yang di pilih?",
            showDenyButton: true,
            denyButtonText: "Tidak",
            confirmButtonText: "Ya",
            customClass: { title: "text-lg", footer: "text-sm" }
        })
            .then((status) => {
                if (status.isConfirmed) {
                    for (const item of checkedList) {
                        resetSoldData(item)
                    }
                    setOnChecked()
                    window.location.reload()
                } else if (status.isDenied) {
                    return
                }
            })
    }
    function resetAllSoldData() {
        Swal.fire({
            icon: "question",
            title: "Yakin me-reset semua data?",
            showDenyButton: true,
            denyButtonText: "Tidak",
            confirmButtonText: "Ya",
            customClass: { title: "text-lg", footer: "text-sm" }
        })
            .then((status) => {
                if (status.isConfirmed) {
                    for (const item of productData) {
                        resetSoldData(item)
                    }
                    window.location.reload()
                } else if (status.isDenied) {
                    return
                }
            })
    }
    function setChoosingCard() {
        setOnChecked()
        setCheckedList([])
    }

    const buttonData = [
        {
            id: 1,
            onClick: setChoosingCard,
            color: "primary",
            text: onChecked ? "Batal" : "Pilih",
            title: "Pilih Data"
        },
        {
            id: 2,
            onClick: resetAllSoldData,
            color: "error",
            text: "Reset Semua",
            title: "Reset Semua Data"
        }

    ]
    return (
        <section className="w-full h-8 sm:h-16 flex justify-start items-center gap-3 text-white" >
            <div className="flex gap-3 text-3xs sm:text-2xs md:text-xs h-7 sm:h-9">
                {
                    buttonData.map((data) => (
                        <Button
                            key={data.id}
                            onClick={data.onClick}
                            color={data.color}
                            title={data.title}
                            variant="contained"
                            sx={{ fontSize: "inherit", height: "inherit" }}
                        >
                            {data.text}
                        </Button>
                    ))
                }
                {
                    onChecked &&
                    <Button
                        onClick={resetChoosingCard}
                        color="success"
                        variant="contained"
                        title="Reset Data Yang Dipilih"
                        sx={{ fontSize: "inherit", height: "inherit" }}
                    >
                        Reset
                    </Button>
                }
            </div>
        </section>
    )
}

export default ResetSoldDataButton
