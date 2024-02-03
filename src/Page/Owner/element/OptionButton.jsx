import { ArrowBackIos, Settings } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { useNavigateProduct } from "../../../../Zustand/Navigate/NavigateStore"
import FilterProduct from "../../../atom/FilterProduct"

function OptionButton() {
    const [optionMenu, setOptionMenu] = useNavigateProduct(state => [state.optionMenu, state.setOptionMenu])

    function handleClick() {
        setOptionMenu(state => !state)
    }

    return (
        <div className="w-16 h-16 flex justify-center items-center text-owner-primary">
            <IconButton onClick={handleClick} color="inherit" title="Option Menu">
                <Settings />
            </IconButton>
            {
                optionMenu &&
                <section className="h-full w-full flex justify-center items-center fixed top-0 left-0 z-20 backdrop-blur-sm webkit-scroll-bar">
                    <div className="h-80 w-full sm:w-2/5 bg-gray-50 rounded-lg shadow-md shadow-owner-primary text-gray-500">
                        <span>
                            <IconButton onClick={handleClick} style={{ margin: "10px 0 0 10px" }} color="inherit">
                                <ArrowBackIos />
                            </IconButton>
                        </span>
                        <section className="pl-5 mt-4">
                            <h4>Kelompokkan Berdasarkan Kategori Produk</h4>
                            <FilterProduct />
                        </section>
                    </div>
                </section>
            }
        </div>
    )
}

export default OptionButton
