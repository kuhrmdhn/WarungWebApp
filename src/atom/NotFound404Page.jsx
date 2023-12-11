function NotFound404Page() {
    return (
        <section className="w-full h-full flex flex-col justify-center items-center">
            <img className="w-80 aspect-square" src="/images/WarungWeb.jpg" alt="WarungWeb Logo" />
            <div className="h-32 w-full flex flex-col justify-center items-center">
                <h1 className="text-2xl">Oops...</h1>
                <p>Halaman tidak ditemukan</p>
            </div>
        </section>
    )
}

export default NotFound404Page
