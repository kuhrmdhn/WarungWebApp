import { ArrowForward } from "@mui/icons-material"
import { Button, FormControl, Link, TextField } from "@mui/material"
import { useRef } from "react"
import { useGetApiStore } from "../../../../Zustand/Api/ApiStore"
import Swal from "sweetalert2"

function Login() {
    const authorizeData = useGetApiStore(state => state.authorizeData)
    const [authUsername, authPassword] = [authorizeData.username, authorizeData.password]
    const usernameInput = useRef("")
    const passwordInput = useRef("")
    const inputData = [
        {
            id: 1,
            label: "Username",
            type: "text",
            ref: usernameInput,
        },
        {
            id: 2,
            label: "Password",
            type: "password",
            ref: passwordInput,
        }
    ]
    function handleSubmit(e) {
        e.preventDefault()
        const password = passwordInput.current.value
        const username = usernameInput.current.value
        if (authPassword === password && authUsername === username) {
            Swal.fire({
                icon: "success",
                text: "Login Berhasil",
                toast: true, timer: 1500,
                timerProgressBar: true,
                showConfirmButton: false,
                position: "top-right"
            })
            setTimeout(() => {
                localStorage.setItem("isLogin", "true")
                window.location.reload()
            }, 1500)
        } else {
            if (authUsername !== username) {
                Swal.fire({
                    icon: "error",
                    text: "Username Salah!",
                    toast: true,
                    timer: 2500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: "top-right"
                })
            }
            else if (authPassword !== password) {
                Swal.fire({
                    icon: "error",
                    text: "Password Salah!",
                    toast: true,
                    timer: 2500,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    position: "top-right"
                })
            }
        }
    }
    return (
        <section className="w-full h-screen flex relative justify-center">
            <aside className="hidden lg:block w-3/5">
                <picture className="w-full h-full bg-gray-50 flex flex-col justify-evenly items-center overflow-hidden">
                    <div className="text-center text-2xl text-blue-500 font-bold">
                        <h1>Oops!</h1>
                        <p>Anda Belum Login</p>
                    </div>
                    <img className="w-1/3 aspect-square" src="/images/assets/login-icon.svg" alt="Login Icon" />
                </picture>
            </aside>
            <section className="w-full sm:w-5/6 lg:w-2/5 h-full flex flex-col gap-7 justify-center items-center">
                <form onSubmit={(e) => handleSubmit(e)} className="h-3/5 w-3/5 flex flex-col gap-7 justify-center items-center">
                    <img className="w-3/5 aspect-video" src="/images/assets/welcome-icon.svg" alt="Login Icon" />
                    {
                        inputData.map(data => (
                            <FormControl fullWidth key={data.id}>
                                <TextField
                                    label={data.label}
                                    type={data.type}
                                    inputRef={data.ref}
                                    required
                                />
                            </FormControl>
                        ))
                    }
                    <Button color="primary" sx={{ fontFamily: "inherit", alignSelf: "end" }} variant="contained" type="submit">Masuk</Button>
                </form>
            </section>
            <Link underline="hover" className="absolute bottom-5 right-5" href="/" target="_blank" rel=" noreferrer">
                WarungWeb
                <ArrowForward />
            </Link>
        </section>
    )
}

export default Login
