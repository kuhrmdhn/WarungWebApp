import { Skeleton } from "@mui/material"

function OrderCard() {
    return (
        <section className="w-full h-20 flex justify-center items-center border border-cashier-primary">
            <div className="w-1/3 h-full flex justify-evenly items-center">
                <Skeleton variant="circular" sx={{ width: "24px", height: "24px" }} />
                <Skeleton variant="rectangular" sx={{ width: "50%", height: "24px" }} />
                <Skeleton variant="circular" sx={{ width: "24px", height: "24px" }} />
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center items-center gap-2">
                <Skeleton variant="rectangular" sx={{ width: "75%", height: "24px" }} />
                <Skeleton variant="rectangular" sx={{ width: "75%", height: "24px" }} />
            </div>
            <div className="w-1/4 h-full flex justify-center items-center">
                <Skeleton variant="circular" sx={{ width: "24px", height: "24px" }} />
            </div>
        </section>
    )
}

function OrderCardSkeleton() {
    return (
        <section className="w-full h-3/4 flex flex-col gap-2 px-2">
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </section>
    )
}

export default OrderCardSkeleton
