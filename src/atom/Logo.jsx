import PropTypes from "prop-types"

function Logo({ children }) {
    return (
        <section>
            {children}
        </section>
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

Logo.LogoWhite = LogoWhite
Logo.LogoBlack = LogoBlack
export default Logo

Logo.propTypes = {
    children: PropTypes.element
}