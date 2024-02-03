function Logo({ children }) {
    return (
        <section>
            {children}
        </section>
    )
}

function LogoImage() {
    return (
        <div className="w-16 h-16 flex justify-center items-center border-2 border-cashier-primary">
            <img className="w-full aspect-square" src="/images/assets/WarungWeb.webp" alt="" />
        </div>
    )
}

function LogoWhite() {
    return(
        <picture className="w-28 sm:w-32 md:w-36 lg:w-44 h-full flex justify-center items-center">
            <img className="w-full aspect-square" src="/images/assets/Logo-White.webp" alt="WarungWeb Logo" />
        </picture>
    )
}

function LogoBlack() {
    return(
        <picture className="w-24 h-16 flex justify-center items-center">
            <img className="w-full aspect-square" src="/images/assets/Logo-Black.webp" alt="WarungWeb Logo" />
        </picture>
    )
}

Logo.LogoImage = LogoImage
Logo.LogoWhite = LogoWhite
Logo.LogoBlack = LogoBlack
export default Logo
