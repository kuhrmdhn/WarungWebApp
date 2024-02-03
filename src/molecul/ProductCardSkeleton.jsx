import SkeletonLoader from "../atom/SkeletonLoader"

function ProductCardSkeleton() {
    return (
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 px-3">
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
            </div>
    )
}

export default ProductCardSkeleton
