import SkeletonLoader from "../atom/SkeletonLoader"

function ProductCardSkeleton() {
    return (
<<<<<<< HEAD
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 px-3">
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
                <SkeletonLoader.ProductCard />
            </div>
=======
        <div className="w-full pt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <SkeletonLoader.CardSkeleton>
                <SkeletonLoader.CardImage />
                <SkeletonLoader.CardTitle />
                <div className='flex justify-around items-center w-full'>
                    <SkeletonLoader.CardPrice />
                    <SkeletonLoader.CardButton />
                </div>
            </SkeletonLoader.CardSkeleton>
            <SkeletonLoader.CardSkeleton>
                <SkeletonLoader.CardImage />
                <SkeletonLoader.CardTitle />
                <div className='flex justify-around items-center w-full'>
                    <SkeletonLoader.CardPrice />
                    <SkeletonLoader.CardButton />
                </div>
            </SkeletonLoader.CardSkeleton>
            <SkeletonLoader.CardSkeleton>
                <SkeletonLoader.CardImage />
                <SkeletonLoader.CardTitle />
                <div className='flex justify-around items-center w-full'>
                    <SkeletonLoader.CardPrice />
                    <SkeletonLoader.CardButton />
                </div>
            </SkeletonLoader.CardSkeleton>
        </div>
>>>>>>> 62532792277426f90780886ce8ac75b26faa8cea
    )
}

export default ProductCardSkeleton
