import SkeletonLoader from "../atom/SkeletonLoader"

function OrderCardSkeleton() {
    return (
        <section className="w-full h-full flex flex-col gap-2 px-2">
            <SkeletonLoader.OrderCard />
            <SkeletonLoader.OrderCard />
            <SkeletonLoader.OrderCard />
        </section>
    )
}

export default OrderCardSkeleton
