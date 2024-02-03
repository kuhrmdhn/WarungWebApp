import { useGetApiStore } from "/Zustand/Api/ApiStore"
import { useNavigate } from "/Zustand/Navigate/NavigateStore"
import { useState } from "react"
import { IconButton } from "@mui/material"
import { Close, MenuOutlined } from "@mui/icons-material"

function Navigate({ children }) {
    const [isNavigateShow, setIsNavigateShow] = useState(false)
    const categoryData = useGetApiStore(state => state.categoryData)
    const setNavigate = useNavigate(state => state.setNavigate)

    function setCategoryByNavigate(e) {
        setNavigate(e.target.innerText)
    }

    return (
        <section className="w-1/4">
            <IconButton className="text-sm sm:text-sm md:text-lg lg:text-xl" aria-label="navbar button" onClick={() => setIsNavigateShow(prev => !prev)}>
                <MenuOutlined/>
            </IconButton>
            <div className={`h-full w-2/3 sm:w-80 bg-white flex flex-col items-center justify-center gap-5 pt-5 fixed z-20 top-0 ${isNavigateShow ? "left-0" : "-left-full"} duration-500`}>
                <div className="h-14 w-full flex justify-center items-center gap-9">
                    <h2 className="text-sm sm:text-base md:text-xl">Pilih Kategori</h2>
                    <IconButton color="warning" sx={{position: "absolute", top: "12px", right: "12px", fontSize: "16px"}} type="button" aria-label="close button" onClick={() => setIsNavigateShow(prev => !prev)}>
                        {/* <FontAwesomeIcon icon={faX} /> */}
                        <Close/>
                    </IconButton>
                </div>
                <ul className="h-full w-full bg-white flex flex-col items-center gap-5">
                    {
                        categoryData.map((data) => (
                            <li onClick={(e) => setCategoryByNavigate(e)} className={`${`background-image-${data.name}`} h-14 xs:h-16 sm:h-20 text-black w-5/6 flex items-center odd:justify-start even:justify-end text-xs xs:text-sm md:text-base lg:text-lg px-2 border border-slate-500 rounded-lg cursor-pointer`} key={data.id}>
                                {data.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
            {children}
        </section>
    )
}

export default Navigate