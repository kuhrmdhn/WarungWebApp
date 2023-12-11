import { FormatRupiah } from "@arismun/format-rupiah"
import { AddShoppingCart, Edit } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"

function ProductCard({ children }) {
    return (
        <section className="h-60 xs:h-64 sm:h-80 lg:h-96 w-36 xs:w-44 sm:w-56 lg:w-86 bg-white flex flex-col items-center justify-between border border-gray-700 rounded-md">
            {children}
        </section>
    )
}

function Image({ image, name }) {
    return (
        <section className="h-full">
            <img src={image} alt={name} className="w-full rounded-md aspect-square bg-center" />
        </section>
    )
}

function Footer({ name, price, button }) {
    return (
        <section className="w-full h-28 flax flex-col items-center justify-around text-xs sm:text-sm md:text-base">
            <div className="w-full h-8 flex items-center justify-center">
                <span>{name}</span>
            </div>
            <div className="w-full h-3/5 flex justify-around items-center text-xxs xs:text-xs md:text-base">
                <FormatRupiah value={price} />
                {button}
            </div>
        </section>
    )
}

function CashierButton({ onAddToOrderCart }) {
    return (
        <Button variant="contained" color="success" onClick={onAddToOrderCart} aria-label="add to order cart button" type="button" className="w-14 xs:w-16 sm:w-24 h-5 xs:h-6 sm:h-8">
            <AddShoppingCart fontSize="small" />
        </Button>
    )
}

function OwnerButton({ editProduct }) {
    return (
        <Button variant="contained" color="primary" onClick={editProduct} aria-label="edit product button" type="button" className="w-14 xs:w-16 sm:w-24 h-5 xs:h-6 sm:h-8">
            <Edit fontSize="small"/>
        </Button>
    )
}


ProductCard.Image = Image
ProductCard.Footer = Footer
ProductCard.CashierButton = CashierButton
ProductCard.OwnerButton = OwnerButton
export default ProductCard
