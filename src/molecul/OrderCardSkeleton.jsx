import SkeletonLoader from "../atom/SkeletonLoader"

function OrderCardSkeleton() {
    return (
        <section className="w-full h-full border border-gray-400">
            <div className="w-full h-20 flex flex-col justify-center items-center border border-gray-400 bg-white my-2">
                <SkeletonLoader.CardTitle />
                <SkeletonLoader.CardPrice />
            </div>
        </section>
    )
}

export default OrderCardSkeleton
