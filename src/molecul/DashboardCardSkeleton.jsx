import SkeletonLoader from "../atom/SkeletonLoader"

function DashboardCardSkeleton() {
    return (
        <section className="w-full h-full flex justify-evenly items-center">
            <SkeletonLoader.DashboardCard/>
            <SkeletonLoader.DashboardCard/>
            <SkeletonLoader.DashboardCard/>
            <SkeletonLoader.DashboardCard/>
        </section>
    )
}

export default DashboardCardSkeleton
