function DashboardCard({ title, detail, icon }) {
    return (
        <section className="h-16 lg:h-20 w-56 flex justify-evenly items-center text-black rounded-lg bg-white shadow-lg border shadow-gray-400 hover:shadow-xl hover:shadow-owner-primary hover:scale-105 cursor-default duration-300">
            <div className="w-24 lg:w-2/3 h-full flex flex-col justify-center items-start pl-3">
                <h1 className="text-2xs lg:text-xs font-light">{detail}</h1>
                <h2 className="text-sm lg:text-lg font-bold">{title}</h2>
            </div>
            <div className="w-1/6 h-full flex justify-center items-center text-md lg:text-2xl text-owner-primary">
                {icon}
            </div>
        </section>
    )
}

export default DashboardCard
