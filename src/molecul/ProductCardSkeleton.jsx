import SkeletonLoader from "../atom/SkeletonLoader"

function ProductCardSkeleton() {
    return (
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
    )
}

export default ProductCardSkeleton
