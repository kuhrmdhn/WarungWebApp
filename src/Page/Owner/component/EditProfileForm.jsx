import { Button, FormControl, TextField } from "@mui/material"
import SectionTitle from "../../../atom/SectionTitle"
import { useFormStore } from "../../../../Zustand/Form/FormStore"
import { useState } from "react"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"
import Swal from "sweetalert2"
import { authorizeData } from "../../../../Zustand/Api/ApiStore"

function EditProfileForm() {
    const [editPassword, setEditPassword] = useState(false)
    const [isNewPasswordConfirmed, setIsNewPasswordConfirmed] = useState(false)
    const [isCurrentPasswordConfirmed, setIsCurrentPasswordConfirmed] = useState(false)
    const [isChangedInput, setIsChangedInput] = useState(false)
    const [setEditProfile, setShowProfile] = useOwnerFeature(state => [state.setEditProfile, state.setShowProfile])
    const [authorizeProfile, handleOnChange, updateAccountData, authorizeAccount, setAuthorizeAccount] = useFormStore(state => [
        state.authorizeProfile,
        state.handleOnChange,
        state.updateAccountData,
        state.authorizeAccount,
        state.setAuthorizeAccount
    ])
    const [username, password, newPassword, confirmPassword] = [
        authorizeAccount.username,
        authorizeAccount.password,
        authorizeAccount.newPassword,
        authorizeAccount.confirmPassword
    ]
    const [name, image] = [authorizeProfile.name, authorizeProfile.image]

    const inputData = [
        {
            id: 1,
            name: "name",
            value: name,
            label: "Nama",
            type: "text",
            state: "authorizeProfile"
        },
        {
            id: 2,
            name: "image",
            value: image,
            label: "Foto Profil",
            type: "text",
            state: "authorizeProfile"
        },
        {
            id: 3,
            name: "username",
            value: username,
            label: "Username",
            type: "text",
            state: "authorizeAccount"
        },
        {
            id: 4,
            name: "password",
            value: password,
            label: "Password",
            type: "password",
            handleError: isCurrentPasswordConfirmed,
            state: "authorizeAccount"
        }
    ]

    const passwordInputData = [
        {
            id: 5,
            name: "newPassword",
            value: newPassword,
            label: "Password Baru",
            type: "password",
            handleError: isNewPasswordConfirmed,
            state: "authorizeAccount"
        },
        {
            id: 6,
            name: "confirmPassword",
            value: confirmPassword,
            label: "Konfirmasi Password",
            type: "password",
            handleError: isNewPasswordConfirmed,
            state: "authorizeAccount"
        }
    ]

    function handleChangeInput(e, state) {
        handleOnChange(e, state)
        setIsChangedInput(true)
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (password !== authorizeAccount.password) {
            setIsCurrentPasswordConfirmed(true)
            return
        }
        if (newPassword !== confirmPassword) {
            setIsNewPasswordConfirmed(true)
            return
        }
        setIsCurrentPasswordConfirmed(false)
        setIsNewPasswordConfirmed(false)
        updateAccountData({ username, password: newPassword ? newPassword : authorizeData.password, name, image })

        Swal.fire({
            text: "Profil Disimpan!",
            toast: true,
            timer: 1400,
            timerProgressBar: true,
            position: "top-right",
            showConfirmButton: false
        })
        setShowProfile()
        setTimeout(() => window.location.reload(),1700)
    }
    function handleCloseProfile() {
        setEditProfile()
        setAuthorizeAccount({ username, password: "", newPassword: "", confirmPassword: "" })
    }
    return (
        <section className="w-full h-64">
            <SectionTitle.Title title={"Edit Profile"} />
            <form onSubmit={(e) => handleSubmit(e)} className="w-11/12 h-full">
                <FormControl fullWidth>
                    <div className="flex flex-col gap-4">
                        {
                            inputData.map((data) => (
                                <TextField
                                    key={data.id}
                                    name={data.name}
                                    value={data.value}
                                    label={data.label}
                                    type={data.type}
                                    onChange={(e) => handleChangeInput(e, data.state)}
                                    error={data.handleError}
                                />
                            ))
                        }
                        {!editPassword &&
                            <span onClick={() => setEditPassword(true)} className="text-slate-700 cursor-pointer font-bold text-end underline">Ubah Password?</span>
                        }
                        {
                            editPassword && passwordInputData.map((data) => (
                                <TextField
                                    key={data.id}
                                    name={data.name}
                                    value={data.value}
                                    label={data.label}
                                    type={data.type}
                                    onChange={(e) => handleChangeInput(e, data.state)}
                                    error={data.handleError}
                                />
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-end gap-3 mt-5">
                        <Button onClick={handleCloseProfile} variant="contained" color="error" type="submit">Batal</Button>
                        {
                            isChangedInput &&
                            <Button variant="contained" type="submit">Simpan</Button>
                        }
                    </div>
                </FormControl>
            </form>
        </section>
    )
}

export default EditProfileForm
