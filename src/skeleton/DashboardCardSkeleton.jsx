import { Skeleton } from "@mui/material"

function DashboardCard() {
    return (
        <section className="h-20 w-56 flex justify-evenly items-center">
            <Skeleton variant="rectangular" sx={{ width: "100%", height: "100%", borderRadius: "8px" }} />
        </section>
    )
}

function DashboardCardSkeleton() {
    return (
        <section className="w-full h-full flex justify-evenly items-center">
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
            <DashboardCard/>
        </section>
    )
}

export default DashboardCardSkeleton
