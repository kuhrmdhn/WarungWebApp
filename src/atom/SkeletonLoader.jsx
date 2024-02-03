import { CircularProgress, Skeleton } from "@mui/material"

function SkeletonLoader({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

function DashboardCard() {
    return (
        <section className="h-20 w-56 flex justify-evenly items-center">
            <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
        </section>
    )
}

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

function AppLoader() {
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center gap-4">
            <CircularProgress color="primary" />
        </section>
    )
}

function Charts() {
    return (
        <section className="h-56 w-full flex justify-center gap-7 items-end">
            <Skeleton variant="rectangular" sx={{ width: "64px", height: "100%" }} />
            <Skeleton variant="rectangular" sx={{ width: "64px", height: "80%" }} />
            <Skeleton variant="rectangular" sx={{ width: "64px", height: "40%" }} />
            <Skeleton variant="rectangular" sx={{ width: "64px", height: "75%" }} />
            <Skeleton variant="rectangular" sx={{ width: "64px", height: "40%" }} />
        </section>
    )
}

SkeletonLoader.AppLoader = AppLoader
SkeletonLoader.DashboardCard = DashboardCard
SkeletonLoader.ProductCard = ProductCard
SkeletonLoader.OrderCard = OrderCard
SkeletonLoader.Charts = Charts
export default SkeletonLoader