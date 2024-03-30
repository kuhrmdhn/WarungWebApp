import PropTypes from "prop-types"

function EmptyProduct({ details }) {
    return (
        <section className="h-full w-full flex flex-col justify-center items-center gap-4">
            <img className="w-1/5 h-1/5" src="/images/assets/box.svg" alt="Box" />
            <p className="text-sm text-slate-400">{details}</p>
        </section>
    )
}

export default EmptyProduct

EmptyProduct.propTypes = {
    details: PropTypes.string.isRequired
}