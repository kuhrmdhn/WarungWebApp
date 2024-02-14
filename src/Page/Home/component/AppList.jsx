import AppCard from "../element/AppCard"

function AppList() {
    const appData = [
        {
            id: 1,
            link: "/cashier",
            img: "/images/assets/cashier.webp",
            alt: "Cashier App"
        },
        {
            id: 2,
            link: "/chef",
            img: "/images/assets/chef.webp",
            alt: "Chef App"
        },
        {
            id: 3,
            link: "/owner",
            img: "/images/assets/owner.webp",
            alt: "Owner App"
        }
    ]
    return (
        <section className="w-full h-fit py-5 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12 sm:gap-16">
            {
                appData.map(data => (
                    <AppCard
                        key={data.id}
                        link={data.link}
                        img={data.img}
                        alt={data.alt}
                    />
                ))
            }
        </section>
    )
}

export default AppList
