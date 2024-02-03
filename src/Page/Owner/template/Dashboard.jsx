import { Suspense, lazy } from "react"
import OwnerHeader from "../component/OwnerHeader"
import DashboardCardSkeleton from "../../../molecul/DashboardCardSkeleton"
import ReportChart from "../element/ReportChart";
import PopularProduct from "../component/PopularProduct";
import SectionTitle from "../../../atom/SectionTitle"
const DashboardCardList = lazy(() => import("../component/DashboardCardList"))

function Dashboard() {
    return (
        <section id="dashboard" className="w-full max-h-none px-2 lg:px-10">
            <OwnerHeader />
            <SectionTitle>
                <SectionTitle.Title title={"Dashboard"} sizes={"large"} />
            </SectionTitle>
            <div className="flex flex-col gap-4">
                <Suspense fallback={<DashboardCardSkeleton />}>
                    <DashboardCardList />
                </Suspense>
                <ReportChart />
                <PopularProduct />
            </div>
        </section>
    )
}

export default Dashboard
