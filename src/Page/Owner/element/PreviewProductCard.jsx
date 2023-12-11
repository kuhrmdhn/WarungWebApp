import ProductCard from "../../../atom/ProductCard"
import defaultCardImage from "/images/assets/default.webp"

function PreviewProductCard({ image, name, price }) {
    return (
        <ProductCard>
            <ProductCard.Image image={image || defaultCardImage} name={name} />
            <ProductCard.Footer name={name} price={price} />
        </ProductCard>
    )
}

export default PreviewProductCard
