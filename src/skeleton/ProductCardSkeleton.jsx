import { Skeleton } from "@mui/material"

function ProductCard() {
    return (
        <section className="w-40 lg:w-56 h-64 lg:h-80 border border-gray-300">
            <Skeleton variant="rectangular" sx={{ width: "100%", height: "70%", borderRadius: "6px 0 0 6px" }} />
            <Skeleton variant="text" sx={{ width: "100%", height: "50px" }} />
            <div className="w-full h-12 flex justify-evenly items-center">
                <Skeleton variant="text" sx={{ width: "50%", height: "40px" }} />
                <Skeleton variant="circular" sx={{ width: "32px", height: "32px" }} />
                <Skeleton variant="circular" sx={{ width: "32px", height: "32px" }} />
            </div>
        </section>
    )
}

function ProductCardSkeleton() {
    return (
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 px-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default ProductCardSkeleton
