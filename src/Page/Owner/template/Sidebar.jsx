import Logo from "../../../atom/Logo"
import { Add, Apps, Home, Store } from "@mui/icons-material"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import SidebarMenu from "../element/SidebarMenu"
import { Avatar } from "@mui/material"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"

function Sidebar() {
    const authorizeData = useGetApiStore(state => state.authorizeData)
    const setShowProfile = useOwnerFeature(state => state.setShowProfile)
    const userAvatar = authorizeData.image

    const navigateData = [
        {
            id: 1,
            text: "Dashboard",
            link: "#dashboard",
            icon: <Home />
        },
        {
            id: 2,
            text: "Semua Produk",
            link: "#allProducts",
            icon: <Apps />
        },
        {
            id: 3,
            text: "Tambah Produk",
            link: "#addNewProduct",
            icon: <Add />
        },
        {
            id: 4,
            text: "Aplikasi Kasir",
            link: "/cashier",
            icon: <Store />,
            target: "_blank"
        },
        {
            id: 5,
            text: "Profil",
            icon: <Avatar src={userAvatar} />,
            onClick: () => setShowProfile()
        }
    ]
    return (
        <nav className="w-full h-full flex flex-col justify-center items-center text-gray-500 bg-gray-200 sm:px-3">
            <header className="hidden sm:flex h-10 xs:h-24 w-full md:w-5/6 justify-center items-center">
                <Logo.LogoBlack />
            </header>
            <section className="pl-0 md:pl-3 h-14 sm:h-5/6 w-full flex sm:flex-col justify-around md:justify-evenly">
                <h3 className="hidden sm:block">MENU</h3>
                <ul className="w-full sm:w-full h-full flex justify-between sm:justify-start sm:flex-col gap-2 sm:mt-5">
                    {
                        navigateData.map((data) => (
                            <li key={data.id} className="w-full h-full sm:h-14 flex items-center">
                                <SidebarMenu
                                    link={data.link}
                                    icon={data.icon}
                                    text={data.text}
                                    target={data.target}
                                    onClick={data.onClick}
                                />
                            </li>
                        ))
                    }
                </ul>
            </section>
        </nav>
    )
}

export default Sidebar