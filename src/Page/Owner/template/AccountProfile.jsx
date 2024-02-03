import ProfileCard from "../component/ProfileCard"
import EditProfileForm from "../component/EditProfileForm"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import SectionTitle from "../../../atom/SectionTitle"
import { IconButton } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"

function AccountProfile() {
  const [editProfile, showProfile, setShowProfile] = useOwnerFeature(state => [state.editProfile, state.showProfile, state.setShowProfile])
  return (
    <section className={`fixed top-0 ${showProfile ? "left-0" : "-left-full"} duration-500 w-1/4 h-full webkit-scroll-bar bg-gray-200 border-r-2 border-gray-500`}>
      <header className="h-1/6 w-full flex justify-start items-center gap-3">
        <IconButton onClick={() => setShowProfile()}>
          <ArrowBack />
        </IconButton>
        <SectionTitle.Title title={"Profil"} sizes={"large"} />
      </header>
      <div className="pl-3">
        <ProfileCard />
        {
          editProfile &&
          <EditProfileForm />
        }
      </div>
    </section>
  )
}

export default AccountProfile