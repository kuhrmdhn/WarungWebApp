import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"

function OwnerHeader() {
    const authorizeData = useGetApiStore(state => state.authorizeData)
    const date = new Date()
    const hour = date.getHours()
    let time;
    switch (true) {
        case hour < 11:
            time = "Pagi"
            break;
        case hour < 15:
            time = "Siang"
            break;
        case hour < 17:
            time = "Sore"
            break;
        default:
            time = "Malam"
            break;
    }

    return (
        <header className="h-20 sm:h-24 lg:h-32 w-full flex rounded-b-md justify-center items-center pt-3 mb-3 font-raleway">
            <section className="w-5/6 h-full flex justify-between items-center">
                <figure className="h-full w-1/4 flex justify-end items-center">
                    <img className="aspect-square h-full" src="/images/assets/admin-icon.svg" alt="Admin Icon" />
                </figure>
                <div className="h-2/3 w-2/3 flex flex-col">
                    <h1 className="text-xs sm:text-sm lg:text-xl font-bold">Selamat {time}, {authorizeData.username} 👋</h1>
                    <p className="text-2xs lg:text-sm">Lihat Kemajuan Bisnis Anda</p>
                </div>
            </section>
        </header>
    )
}

export default OwnerHeader
