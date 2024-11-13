import { useToast } from "@chakra-ui/react";
import { Error, Verified } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function useLogin(username: string, password: string) {
    const toast = useToast()
    const [pending, setPending] = useState(false)
    const { push } = useRouter()
    const searchParams = useSearchParams()

    async function handleLogin(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const callbackUrl = searchParams.get("callback") || "/"
        e.preventDefault()
        if (username === "" || password === "") {
            toast({
                title: "Input can't be empty",
                colorScheme: "red",
                icon: <Error />,
                duration: 3000,
                position: "top-right"
            });
            return;
        }
        setPending(true)
        try {
            const loginResponse = await signIn('credentials', {
                redirect: false,
                username: username,
                password: password,
            });
            if (loginResponse && loginResponse.ok) {
                toast({
                    title: "Login Success",
                    colorScheme: "green",
                    icon: <Verified />,
                    duration: 3000,
                    position: "top-right"
                });
                setTimeout(() => {
                    push(callbackUrl)
                }, 100);
            } else if (loginResponse && loginResponse.error) {
                toast({
                    title: "Failed Login",
                    colorScheme: "red",
                    icon: <Error />,
                    duration: 3000,
                    position: "top-right"
                });
            }
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false)
        }
    }

    return { pending, handleLogin }
}