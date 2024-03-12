import ProfileCard from "../component/ProfileCard"
import EditProfileForm from "../component/EditProfileForm"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import SectionTitle from "../../../atom/SectionTitle"
import { Button, Drawer, IconButton } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import Swal from "sweetalert2"

function AccountProfile() {
  const [editProfile, showProfile, setShowProfile] = useOwnerFeature(state => [state.editProfile, state.showProfile, state.setShowProfile])
  function handleLogout(e) {
    e.preventDefault()
    setShowProfile()
    Swal.fire({
      title: "Logout",
      text: "Anda Yakin Ingin Logout?",
      icon: "question",
      focusCancel: true,
      showCancelButton: true,
      cancelButtonText: "Tidak",
      cancelButtonColor: "#D32F2F"
    }).then((status) => {
      if (status.isConfirmed) {
        localStorage.removeItem("isLogin")
        window.location.reload()
      }
    })
  }

  return (
    <Drawer open={showProfile} onClose={setShowProfile} anchor="left">
      <section className="w-screen sm:w-96 h-full pl-5 webkit-scroll-bar bg-gray-200">
        <header className="h-1/6 w-full flex justify-start items-center gap-3">
          <IconButton onClick={setShowProfile}>
            <ArrowBack />
          </IconButton>
          <SectionTitle.Title title={"Profil"} sizes={"large"} />
          <section className="h-12 w-full pr-5 flex justify-end">
            <Button onClick={(e) => handleLogout(e)} color="primary">Logout</Button>
          </section>
        </header>
        <div className="pl-3">
          <ProfileCard />
          {
            editProfile &&
            <EditProfileForm />
          }
        </div>
      </section>
    </Drawer>
  )
}

export default AccountProfile