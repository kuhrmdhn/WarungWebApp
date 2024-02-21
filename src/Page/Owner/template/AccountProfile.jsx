import ProfileCard from "../component/ProfileCard"
import EditProfileForm from "../component/EditProfileForm"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import SectionTitle from "../../../atom/SectionTitle"
import { Button, IconButton } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import Swal from "sweetalert2"

function AccountProfile() {
  const [editProfile, showProfile, setShowProfile] = useOwnerFeature(state => [state.editProfile, state.showProfile, state.setShowProfile])
  function handleLogout(e) {
    e.preventDefault()
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
    <section className={`fixed top-0 z-20 ${showProfile ? "left-0" : "-left-full"} duration-500 w-full sm:w-1/3 h-full pl-5 webkit-scroll-bar bg-gray-200`}>
      <header className="h-1/6 w-full flex justify-start items-center gap-3">
        <IconButton onClick={() => setShowProfile()}>
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
  )
}

export default AccountProfile