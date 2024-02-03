import SkeletonLoader from "../atom/SkeletonLoader"

function OrderCardSkeleton() {
    return (
<<<<<<< HEAD
        <section className="w-full h-full flex flex-col gap-2 px-2">
            <SkeletonLoader.OrderCard />
            <SkeletonLoader.OrderCard />
            <SkeletonLoader.OrderCard />
=======
        <section className="w-full h-full border border-gray-400">
            <div className="w-full h-20 flex flex-col justify-center items-center border border-gray-400 bg-white my-2">
                <SkeletonLoader.CardTitle />
                <SkeletonLoader.CardPrice />
            </div>
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
        </section>
    )
}

export default OrderCardSkeleton
