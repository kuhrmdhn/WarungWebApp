import { Button, FormControl, TextField } from "@mui/material"
import SectionTitle from "../../../atom/SectionTitle"
import { getAuthorizeData, useFormStore } from "../../../../Zustand/Form/FormStore"
import { useState } from "react"
import { useOwnerFeature } from "../../../../Zustand/OwnerFeature/OwnerFeatureStore"

function EditProfileForm() {
    const [editPassword, setEditPassword] = useState(false)
    const [isNewPasswordConfirmed, setIsNewPasswordConfirmed] = useState(false)
    const [isCurrentPasswordConfirmed, setIsCurrentPasswordConfirmed] = useState(false)
    const setEditProfile = useOwnerFeature(state => state.setEditProfile)
    const [authorizeData, handleOnChange, updateAccountData, authorizeAccount, setAuthorizeAccount] = useFormStore(state => [
        state.authorizeData,
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
    const [name, image] = [authorizeData.name, authorizeData.image]

    const inputData = [
        {
            id: 1,
            name: "name",
            value: name,
            label: "Nama",
            type: "text",
            onChange: (e) => handleOnChange(e, "authorizeData")
        },
        {
            id: 2,
            name: "image",
            value: image,
            label: "Foto Profil",
            type: "text",
            onChange: (e) => handleOnChange(e, "authorizeData")
        },
        {
            id: 3,
            name: "username",
            value: username,
            label: "Username",
            type: "text",
            onChange: (e) => handleOnChange(e, "authorizeAccount")
        },
        {
            id: 4,
            name: "password",
            value: password,
            label: "Password",
            type: "password",
            handleError: isCurrentPasswordConfirmed,
            onChange: (e) => handleOnChange(e, "authorizeAccount")
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
            onChange: (e) => handleOnChange(e, "authorizeAccount")
        },
        {
            id: 6,
            name: "confirmPassword",
            value: confirmPassword,
            label: "Konfirmasi Password",
            type: "password",
            handleError: isNewPasswordConfirmed,
            onChange: (e) => handleOnChange(e, "authorizeAccount")
        }
    ]

    function handleSubmit(e) {
        e.preventDefault()
        if (password !== getAuthorizeData.password) {
            setIsCurrentPasswordConfirmed(true)
            return
        }
        if (newPassword !== confirmPassword) {
            setIsNewPasswordConfirmed(true)
            return
        }
        setIsCurrentPasswordConfirmed(false)
        setIsNewPasswordConfirmed(false)

        updateAccountData({ username, password: newPassword ? newPassword : getAuthorizeData.password, name, image })
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
                                    onChange={data.onChange}
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
                                    onChange={data.onChange}
                                    error={data.handleError}
                                />
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-end gap-3 mt-5">
                        <Button onClick={handleCloseProfile} variant="contained" color="error" type="submit">Batal</Button>
                        <Button variant="contained" type="submit">Simpan</Button>
                    </div>
                </FormControl>
            </form>
        </section>
    )
}

export default EditProfileForm
