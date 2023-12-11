import { Skeleton } from "@mui/material"

function SkeletonLoader({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardSkeleton({ children }) {
    return (
        <div className="h-72 lg:h-96 w-44 lg:w-72 flex flex-col items-center justify-between border-2 border-grey-400 rounded-md">
            {children}
        </div>
    )
}

function CardImage() {
    return (
        <div className="w-full h-40 lg:h-64">
            <Skeleton variant="rounded" height={"inherit"} width={"inherit"} />
        </div>
    )
}

function CardTitle() {
    return <Skeleton animation={"wave"} variant="text" sx={{ fontSize: "1.7rem" }} height={44} width={160} />
}

function CardPrice() {
    return <Skeleton animation={"wave"} variant="text" sx={{ fontSize: "1.7rem" }} height={50} width={120} />
}

function CardButton() {
    return <Skeleton animation={"wave"} variant="text" sx={{ fontSize: "1.7rem" }} height={64} width={92} />
}



SkeletonLoader.CardSkeleton = CardSkeleton
SkeletonLoader.CardImage = CardImage
SkeletonLoader.CardTitle = CardTitle
SkeletonLoader.CardPrice = CardPrice
SkeletonLoader.CardButton = CardButton
export default SkeletonLoader