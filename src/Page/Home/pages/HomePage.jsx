import AppList from "../component/AppList"
import HomeHeader from "../component/HomeHeader"

function HomePage() {
  return (
    <main className="h-screen w-full bg-white text-black">
      <HomeHeader/>
      <AppList/>
    </main>
  )
}

export default HomePage
