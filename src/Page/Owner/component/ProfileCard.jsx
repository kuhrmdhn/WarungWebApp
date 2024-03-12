import { Edit } from "@mui/icons-material"
import { useFormStore, getAuthorizeData } from "../../../../Zustand/Form/FormStore"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import { IconButton } from "@mui/material"

function ProfileCard() {
    const authorizeData = useFormStore(state => state.authorizeData)
    const [editProfile, setEditProfile] = useOwnerFeature(state => [state.editProfile, state.setEditProfile])
    const [image, name, username] = [authorizeData.image, getAuthorizeData.name, getAuthorizeData.username]

    return (
        <section className="h-fit w-full flex flex-col justify-between items-center">
            <img className="aspect-square h-44 rounded-full mb-5" src={image} alt={name} />
            <div className="h-24 w-full flex justify-around items-start">
                <section>
                    <h1 className="text-xl font-semibold">{username}</h1>
                    <p className="text-lg text-slate-600">{name}</p>
                </section>
                <span>
                    <IconButton color="primary" onClick={setEditProfile}>
                        {!editProfile && <Edit/>}
                    </IconButton>
                </span>
            </div>
        </section>
    )
}

export default ProfileCard
