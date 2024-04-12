import { Suspense, lazy } from "react"
const AppList = lazy(() => import("../component/AppList"))
import HomeHeader from "../component/HomeHeader"
import AppCardSkeleton from "../../../skeleton/AppCardSkeleton"

function HomePage() {
  document.title = "Warung Web"
  return (
    <main className="h-screen w-full bg-white text-black">
      <HomeHeader />
      <Suspense fallback={<AppCardSkeleton />}>
        <AppList />
      </Suspense>
    </main>
  )
}

export default HomePage
